import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { fadeInAnimation } from '../../template/animations/fade-in.animation';
import { DataService } from '../../service/data.service';
import {Observable} from 'rxjs/Rx';

@Component({
    selector:'my-product2',
    templateUrl:'./product2.component.html',
    styleUrls:['./product.component.css'],
    animations: [fadeInAnimation]
    // providers:[DataService]
})

export class Product2Component implements OnInit {
    private UserWallet:any;
    private table_data:string;
    private Uw_Add:any;
    private Uw_Edit:any;
    private EditUserId:any;
    private arr_temp:any;
    constructor(private dataService:DataService,
                private router:Router, 
                private activatedRoute:ActivatedRoute){
        this.table_data = "userwallet";
        this.Uw_Add = {};
        this.Uw_Edit = {};
        this.EditUserId = "";
    }
    ngOnInit(){
       this.loadAll();
    }
    loadAll(){
        this.dataService.GetAll(this.table_data).subscribe((respone:any)=>{
            this.UserWallet = respone;
            // console.log('UserWallet :' + JSON.stringify(this.UserWallet));
        },error =>{
            console.log("System error API ! ErrorCode : "+error.status);
            console.log(error);
        });
    }
    // Add User Wallet
    AddSaveForm(){
        this.dataService.Add(this.table_data,this.Uw_Add).subscribe((respone:any)=>{
            console.log('respone : ' + JSON.stringify(respone));
            console.log('respone : ' + respone.errno);
            if(respone.errno != 0) {
                alert('You can not register with UserId : '+ this.Uw_Add.UserId);
            } else {
                this.loadAll();
                alert("Add Success !");
                // $("#exampleModal").modal("hide");
                this.router.navigate(['product2']);
            }
        },error =>{
            console.log("System error API ! ErrorCode : "+error.status);
            console.log(error);
        })
    }
    // Edit User Wallet
    Edit(userId:any){
        console.log(userId);
        this.EditUserId = userId;
        this.dataService.GetbyID(this.table_data,this.EditUserId).subscribe((respone:any)=>{
            this.arr_temp = respone;
            this.arr_temp.forEach(userwallet => {
                this.Uw_Edit = userwallet;
                }
            )
        },error =>{
            console.log("System error API ! ErrorCode : "+error.status);
            console.log(error); 
        });
    }
    EditSaveForm(){
        this.dataService.Update(this.table_data,this.EditUserId,this.Uw_Edit).subscribe((respone:any)=>{
            console.log('respone : ' + JSON.stringify(respone));
            console.log('respone : ' + respone.errno);
            if(respone) {
                this.loadAll();
                alert("Edit Success !");
                this.router.navigate(['product2']);
            } else {
                alert('You can not edit UserId : '+ this.EditUserId);
            }
            // $("#exampleModal").modal("hide");
        })
    }
    // Delete 1 UserWallet
    Delete(id:any){
        if(confirm('Do you want delete User Wallet : '+id+' ?')) {
            this.dataService.Delete(this.table_data, id).subscribe(respone=> {
                console.log('respone : ' + JSON.stringify(respone));
                    alert('Delete Success !');
                    this.loadAll();
            },error =>{
                alert("System error API ! ErrorCode : "+error.status);
                console.log(error);
            });
        }
    }
}