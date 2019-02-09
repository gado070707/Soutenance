import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Links } from '../includes/links';
import { User } from '../models/user';
// import { Serv } from '../../back/config/global';

const LOCAL_STORAGE_USER_KEY = 'currentItem';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(
        private http: HttpClient,
        private link: Links,
        ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY)));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    API_BASE_URL = this.link.linkCreator();

    login(mail: string, password: string) {
        const data = {
            mail: mail,
            password: password
        };

        return this.http.post<User>(this.API_BASE_URL + '/authentification', data)
            .pipe(tap(user => {}))
            .pipe(map(user => {
                // login successful if there's a jwt token in the response.
                if (user) {
                    // store user details and jwt token in local storage to
                    // keep user logged in between pages refresh.
                    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user form local storage to log user out.
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        this.currentUserSubject.next(null);
    }

    isLoggedIn() {
        if (this.currentUserSubject.value == null) {
            return false;
        } else {
            return true;
        }
    }
}
