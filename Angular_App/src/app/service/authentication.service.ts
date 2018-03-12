import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class AuthenticationService {
    private apiUrl = "http://5a52d29c50dffb001256e0e8.mockapi.io/product/account";
    private users: any[]
    constructor(
        private _router: Router, private _http: Http) { }

    getList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response) => response.json())

    }
    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['/login']);
    }

    login(user) {
        this._http.get(this.apiUrl).map((response: Response) => response.json()).subscribe((response: any) => {
            this.users = response;
            console.log(this.users);
            console.log(user.username);
            var authenticatedUser = this.users.find(u => u.username === user.username);
            var authenticatedUser1 = this.users.find(u => u.password === user.password);
            console.log('au :' + authenticatedUser);
            console.log('au1 :'+ authenticatedUser1);
            if (authenticatedUser && authenticatedUser1) {
                localStorage.setItem('user', authenticatedUser);
                this._router.navigate(['/home']);
                return true;
            }
            return false;
        })
    }
    CheckLogin(user) {
        return this._http.get(this.apiUrl)
           .map(response => response.json())
           .map(users => users.find(u => u.user === user.user && u.password === user.password) // finds authenticatedUser
           .filter(authenticatedUser => !!authenticatedUser) // filters null and undefined
           .do(authenticatedUser  => localStorage.setItem('user', authenticatedUser))
           .do(() => this._router.navigate(['/home'])));
    }
}