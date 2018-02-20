import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService{
    // Company
    private productUrl = 'http://5a52d29c50dffb001256e0e8.mockapi.io/product/product';
    constructor(private _http:Http) {
    }
    // Service Local 
    // GetList():any[]{
        // Service Local 
        // let SinhVien:any[] = [
        //     {Id:1, Name:'Nguyen A'},
        //     {Id:2, Name:'Nguyen B'},
        //     {Id:3, Name:'Nguyen C'},
        //     {Id:4, Name:'Nguyen D'}
        // ];
        // return SinhVien;
    // }

    // Service API
    GetList():Observable<any[]>{
        // Tra ve 1 doi tuong Observable va map sang json
         return this._http.get(this.productUrl).map((respone:Response) => respone.json());
    }
    // Route definition with a parameter
    GetSingle(pid:any):Observable<any> {
        return this._http.get(this.productUrl + "/"+ pid).map((respone:Response) => respone.json());
    }
    // Function Update Object : PUT
    Update(pid:any,data:any):Observable<any> {
        return this._http.put(this.productUrl + "/"+ pid,data).map((respone:Response) => respone.json());
    }
    // Function Add Object : POST
    Add(data:any):Observable<any> {
        return this._http.post(this.productUrl,data).map((respone:Response) => respone.json());
    }
    // Function Delete Object : DELETE
    Delete(pid:any):Observable<any> {
        return this._http.delete(this.productUrl + "/"+ pid).map((respone:Response) => respone.json());
    }
    // Function Search Data with id
    Search(keyword:string):Observable<any[]>{
         return this._http.get(this.productUrl+'/'+'?search='+keyword).map((respone:Response) => respone.json());
    }
    // Function Sort Data with id
    SortBy(keysort:string,modesort:string):Observable<any[]>{
        return this._http.get(this.productUrl+'/'+'?sortBy='+keysort+'&oder='+modesort).map((respone:Response) => respone.json());
    }
    // Get Pagination
    GetListPagination(page:number,limit:number){
            return this._http.get(this.productUrl+'/'+'?page='+page+'&limit='+limit).map((respone:Response) => respone.json());
    }
    // Sort by Pagination
    SortByPagination(page:number,limit:number,keysort:string,modesort:string){
            return this._http.get(this.productUrl+'/'+'?page='+page+'&limit='+limit+'&sortBy='+keysort+'&oder'+modesort)
            .map((respone:Response) => respone.json());
    }
}
