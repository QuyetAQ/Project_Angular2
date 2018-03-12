import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from './configuration.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService implements OnInit {
    private actionUrl: string;
    constructor(private _http: Http, private _Configuration: Configuration){
        this.actionUrl = this._Configuration.ServerWithApiUrl;
    }
    ngOnInit(){
    }
    // Get All
    GetAll(ns:string):Observable<any[]>{
         return this._http.get(this.actionUrl+ns).map((respone:Response) => respone.json());
    }
    // Get by Id
    GetbyID(ns:string,id:any):Observable<any> {
        return this._http.get(this.actionUrl + ns + "/"+ id).map((respone:Response) => respone.json());
    }
    // Add 1 record
    Add(ns:string,data:any):Observable<any> {
        return this._http.post(this.actionUrl + ns,data).map((respone:Response) => respone.json());
    }
    // Delete by Id
    Delete(ns:string,id:any):Observable<any> {
        return this._http.delete(this.actionUrl + ns + "/"+ id).map((respone:Response) => respone.json());
    }
    // Update by Id with data
    Update(ns:string,id:any,data:any):Observable<any> {
        return this._http.put(this.actionUrl + ns + "/"+ id,data).map((respone:Response) => respone.json());
    }
}