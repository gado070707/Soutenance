import { Injectable } from '@angular/core';

let API_LINK = '';

@Injectable({
    providedIn: 'root'
})

export class Links {
    constructor() { }

    linkCreator() {
        var ip = window.location.origin;

        if (ip.indexOf('4200') != -1) {
            ip = ip.replace('http://localhost:4200', 'https://localhost:3000');
        } else {
            ip = ip.replace('https://www.findmytruck.fr', 'https://findmytruck.fr:3000');
        }
        return ip;
    }
}
