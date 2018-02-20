import {Component, OnInit} from '@angular/core';
import {ProductService} from './../../service/product.service';
import { error } from 'util';
import {Router,ActivatedRoute} from '@angular/router';
import { fadeInAnimation } from '../../template/animations/fade-in.animation';

@Component({
    selector:'my-product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css'],
    animations: [fadeInAnimation]
    // providers:[ProductService]
})

export class ProductComponent implements OnInit {
    public Product:any[];
    public Pd_Add:any;
    public keyword:string;
    public keySort:string;
    public pages:number[];
    public currentPage:number;
    public maxRecord:number;
    public maxPage:number;
    public prePage:boolean = false;
    public nexPage:boolean = true;
    public listSort = [
        {Id:1, Name:'createdAt'},
        {Id:2, Name:'name'},
        {Id:3, Name:'age'}
    ];
    constructor(private productService:ProductService,
                private router:Router, 
                private activatedRoute:ActivatedRoute){

    }
    ngOnInit(){
        // Product Local
        // this.Product = this.productService.GetList();
        // Service API
                this.productService.GetList().subscribe((respone:any)=>{
                    // Subcribe Observable gan du lieu tra ve vao bien respond
                    // this.Product = respone;
                    this.maxRecord = respone.length;
                    if(this.maxRecord%5 > 2.5 || this.maxRecord%5 == 0) {
                        this.maxPage = Math.round(this.maxRecord/5);
                    } else {
                        this.maxPage = Math.round(this.maxRecord/5) + 1;
                    }
                    // console.log('Max page :' + this.maxPage);
                },error =>{
                    console.log("System error API");
                    console.log(error);
                });
        // Declare Page
        this.pages= [1,2,3];
        // Get Page Current
        this.activatedRoute.queryParams.subscribe(params =>{
            this.currentPage = params['page'] || 1;
            // console.log(this.currentPage);
        })
        // Phan trang sau khi load
        this.GetListPagination();
        // Khoi tao Sinh Vien Add
        this.Pd_Add = {};
    }
    // Get list Pagination
    GetListPagination(){
        this.router.navigate(['product'], { queryParams: {page:this.currentPage, limit:5}});
        this.productService.GetListPagination(this.currentPage,5).subscribe((respone:any)=>{
            this.Product = respone;
        },error =>{
            console.log("Get List Pagination Error");
            console.log(error);
        })
    }
    // Back to Home
    BacktoHome(){
        this.router.navigate(['/home']);
    }
    // Go to Add page
    GotoAdd(){
        this.router.navigate(['/product-add']);
    }
    // Delete record
    Delete(id:number){
        if(confirm('Do you want delete Product ?')) {
            this.productService.Delete(id).subscribe(respone=> {
                if(respone) {
                    alert('Delete Succes');
                    // Load data after Delete
                    this.LoadData();
                }
            })
        }
    }
    LoadData(){
        // this.productService.GetList().subscribe((respone:any)=>{
        //     this.Product = respone;
        //     console.log(this.Product);
        // },error =>{
        //     console.log("System error API");
        //     console.log(error);
        // })
        this.router.navigate(['product'], { queryParams: {page:this.currentPage, limit:5}});
        this.productService.GetListPagination(this.currentPage,5).subscribe((respone:any)=>{
            this.Product = respone;
        },error =>{
            console.log("Get List Pagination Error");
            console.log(error);
        })
    }
    // Search Data with id
    Search(){
        this.productService.Search(this.keyword).subscribe((respone:any)=>{
            this.Product = respone;
        },error =>{
            console.log("Search Data Error");
            console.log(error);
        })
    }
    // Sort by keySort & modeSort
        // SortBy(keySort:string){
        //     console.log(keySort);
        //     this.sinhvienService.SortBy(keySort,'desc').subscribe((respone:any)=>{
        //         this.SinhVien = respone;
        //     },error =>{
        //         console.log("Sort Error");
        //         console.log(error);
        //     })
        // }
    SortByPagi(keySort:string){
        this.productService.SortByPagination(this.currentPage,5,keySort,'desc').subscribe((respone:any)=>{
            this.Product = respone;
        },error =>{
            console.log("Sort Error");
            console.log(error);
        })
    }
    // Pagination
    nextPage() {
        if(this.currentPage < this.maxPage ){
            this.nexPage = true;
            this.prePage = true;
            this.currentPage++;
        } 
        if(this.currentPage == this.maxPage) {
            this.nexPage = false;
        }
        // console.log(this.currentPage +'-'+ this.maxPage)
        this.router.navigate(['product'], { queryParams: {page:this.currentPage, limit:5}});
        this.GetListPagination();
    }
    previousPage(){
        if(this.currentPage > 1) {
            this.currentPage--;
            this.nexPage = true;
        }
        if(this.currentPage == 1) {
            this.prePage = false;
        }
        this.router.navigate(['product'], { queryParams: {page:this.currentPage, limit:5}});
        this.GetListPagination();
    }
    // Demo Modal
    SaveForm(){
        this.productService.Add(this.Pd_Add).subscribe((respone:any)=>{
            if(respone) {
                this.LoadData();
                alert("Add Success !");
                // this.router.navigate(['service']);
                // $("#exampleModal").modal("hide");
            } else {
                alert('Add Fail !');
            }
        })
    }
}