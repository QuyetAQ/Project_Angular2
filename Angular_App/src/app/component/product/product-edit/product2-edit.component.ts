import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { fadeInAnimation } from '../../../template/animations/fade-in.animation';
import { DataService } from '../../../service/data.service';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-product2-edit',
    templateUrl: './product2-edit.component.html',
    animations: [fadeInAnimation]
    // providers:[DataService]
})

export class Product2EditComponent implements OnInit {
    public _id: number;
    public subcription: Subscription;
    private UserWallet:any;
    private arr_temp:any;
    private table_data:string;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
        private dataService: DataService) {
            this.table_data = "userwallet";
    }
    ngOnInit() {
        this.subcription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];
        });
        this.dataService.GetbyID(this.table_data,this._id).subscribe((respone: any) => {
            this.arr_temp = respone;
            this.arr_temp.forEach(userwallet => {
                this.UserWallet = userwallet;
                }
            )
        });
    }
    ngOnDestroy() {
        this.subcription.unsubscribe();
    }
    SaveForm() {
        this.dataService.Update(this.table_data,this._id, this.UserWallet).subscribe((respone: any) => {
            console.log('respone : ' + respone);
            if(respone) {
                alert("Update Success !");
                this.router.navigate(['product2']);
            } else {
                alert('You can not register with UserId : '+ this._id);
            }
        },error =>{
            console.log("System error API ! ErrorCode : "+error.status);
            console.log(error);
        })
    }
    GotoProduct() {
        this.router.navigate(['product2']);
    }
}