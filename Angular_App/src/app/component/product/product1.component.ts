import {Component, OnInit} from '@angular/core';
import {ProductService} from './../../service/product.service';
import { error } from 'util';
import {Router,ActivatedRoute} from '@angular/router';
import { fadeInAnimation } from '../../template/animations/fade-in.animation';

@Component({
    selector:'my-product1',
    templateUrl:'./product1.component.html',
    styleUrls:['./product.component.css'],
    animations: [fadeInAnimation]
    // providers:[ProductService]
})

export class Product1Component implements OnInit {
    private Product:any[];
    private Product_Add:any;
    private keyWord:string;
    private keySort:string;
    private modeSort:string;
    private pages:number[];
    private currentPage:number;
    private maxRecord:number;
    private maxPage:number;
    private prePage:boolean = false;
    private nexPage:boolean = true;
    private listSort = [
        {Id:1, Name:'createdAt'},
        {Id:2, Name:'name'},
        {Id:3, Name:'age'}
    ];
    constructor(private productService:ProductService,
                private router:Router, 
                private activatedRoute:ActivatedRoute){

    }
    ngOnInit(){
        this.keyWord = "";
        this.keySort = this.listSort[1].Name;
        this.modeSort = "desc";
        this.maxPage = 0;
        this.maxRecord = 0;
        this.pages= [1,2,3];
        // Get Page Current
        this.activatedRoute.queryParams.subscribe(params =>{
            this.currentPage = params['page'] || 1;
            // console.log(this.currentPage);
        })
        this.GetListPagination();
        this.Product_Add = {};
    }
    // Get list Pagination
    GetListPagination(){
        // Calculator max record
        this.productService.GetAllSearchSort(this.keyWord, this.keySort, this.modeSort).subscribe((respone:any)=>{
            this.maxRecord = respone.length;
            if(this.maxRecord%5 > 2.5 || this.maxRecord%5 == 0) {
                this.maxPage = Math.round(this.maxRecord/5);
            } else {
                this.maxPage = Math.round(this.maxRecord/5) + 1;
            }
            console.log("Max record : " + this.maxRecord);
            console.log("Max maxPage : " + this.maxPage);
        },error =>{
            console.log("System error API");
            console.log(error);
        });
        // Get All Search 
        this.router.navigate(['product1'], { queryParams: {search:this.keyWord,sort:this.keySort,modesort:this.modeSort,page:this.currentPage, limit:5}});
        console.log(this.keyWord +"-"+ this.keySort +"-"+ this.currentPage)
        this.productService.GetAllSearchSortPagination(this.keyWord, this.keySort, this.modeSort, this.currentPage, 5).subscribe((respone:any)=>{
            this.Product = respone;
            // console.log(this.Product);
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
                    this.GetListPagination();
                }
            })
        }
    }
    // Search Data with id
    Search(){
        this.GetListPagination();
    }
    // Sort by keySort & modeSort
    SortByPagi(keySort:string){
        this.GetListPagination();
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
        this.router.navigate(['product1'], { queryParams: {search:this.keyWord,sort:this.keySort,page:this.currentPage, limit:5}});
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
        this.router.navigate(['product1'], { queryParams: {search:this.keyWord,sort:this.keySort,page:this.currentPage, limit:5}});
        this.GetListPagination();
    }
    // Demo Modal
    SaveForm(){
        this.productService.Add(this.Product_Add).subscribe((respone:any)=>{
            if(respone) {
                this.GetListPagination();
                alert("Add Success !");
                // this.router.navigate(['service']);
                // $("#exampleModal").modal("hide");
            } else {
                alert('Add Fail !');
            }
        })
    }
}