import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
    public _isLoggedIn: boolean;
    public _AccountLogin:any;
    private accountUrl = 'http://5a52d29c50dffb001256e0e8.mockapi.io/product/account';

    constructor(private _http:Http) {
        this._isLoggedIn = false;
    }
    // Get All
    GetAll():Observable<any> {
        return this._http.get(this.accountUrl).map((respone:Response) => respone.json());
    }
    // Get Single
    GetSingle(pid:any):Observable<any> {
        return this._http.get(this.accountUrl + "/"+ pid).map((respone:Response) => respone.json());
    }
    // Register Account
    AddAccount(data:any):Observable<any> {
        return this._http.post(this.accountUrl,data).map((respone:Response) => respone.json());
    }
    // Delete Account
    RemoveAccount(pid:any):Observable<any> {
        return this._http.delete(this.accountUrl + "/"+ pid).map((respone:Response) => respone.json());
    }

    // Status Login
    IsLogged(): boolean {
        return this._isLoggedIn;
    }
    // Set Login
    SetLogin(isLoggedIn: boolean) {
        this._isLoggedIn = isLoggedIn;
    }
}