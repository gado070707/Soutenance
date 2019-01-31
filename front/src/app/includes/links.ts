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
<<<<<<< HEAD
        } else {
            console.log('ok ok non 4200');
=======
        }
        else {
>>>>>>> 1f874a3aa0ff0bbab8fce09cc1538bce6e802a15
            ip = ip.replace('https://www.findmytruck.fr', 'https://findmytruck.fr:3000');
        }
        return ip;
    }
}