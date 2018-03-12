import {Component, OnInit , OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ProductService } from './../../../service/product.service';
import { fadeInAnimation } from '../../../template/animations/fade-in.animation';

@Component({
    selector:'my-product-add',
    templateUrl: './product-add.component.html',
    animations: [fadeInAnimation]
})

export class ProductAddComponent implements OnInit {
    public _id:number;
    public Product:any;
    constructor(private router:Router, private activatedRoute:ActivatedRoute,
                private productService:ProductService){

    }
    ngOnInit(){
        this.Product = {};
    }
    SaveForm(){
        this.productService.Add(this.Product).subscribe((respone:any)=>{
            if(respone) {
                this.router.navigate(['product']);  
            }
        })
    }
}