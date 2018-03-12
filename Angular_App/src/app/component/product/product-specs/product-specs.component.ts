import {Component,OnInit,OnDestroy} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { fadeInAnimation } from '../../../template/animations/fade-in.animation';

@Component({
    selector:'my-product-specs',
    templateUrl: './product-specs.component.html',
    animations: [fadeInAnimation]
})

export class ProductSpecsComponent implements OnInit {
    public id_specs:number;
    public sub:Subscription;
    constructor(private router:Router,private activedRoute:ActivatedRoute){

    }
    // Get Param o component cha
    ngOnInit(){
        this.sub = this.activedRoute.parent.params.subscribe(params => {
            this.id_specs = params['id'];
        })
    }
    ngOnDestroy(){
        this.sub.unsubscribe();
    }
}