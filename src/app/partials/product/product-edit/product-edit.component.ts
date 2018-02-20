import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from './../../../service/product.service';
import { fadeInAnimation } from '../../../template/animations/fade-in.animation';

@Component({
    selector: 'my-product-edit',
    templateUrl: './product-edit.component.html',
    animations: [fadeInAnimation]
})

export class ProductEditComponent implements OnInit {
    public _id: number;
    public subcription: Subscription;
    public Product: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
        private productService: ProductService) {

    }
    ngOnInit() {
        this.subcription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];
        });
        this.productService.GetSingle(this._id).subscribe((respone: any) => {
            // Subcribe Observable gan du lieu tra ve vao bien respond
            this.Product = respone;
            // console.log(respone);
        })
    }
    ngOnDestroy() {
        this.subcription.unsubscribe();
    }
    SaveForm() {
        this.productService.Update(this._id, this.Product).subscribe((respone: any) => {
            if (respone) {
                this.router.navigate(['product']);
            }
        })
    }
    GotoProduct() {
        this.router.navigate(['product']);
    }
}