import {Component,OnInit,OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { fadeInAnimation } from '../../../template/animations/fade-in.animation';

@Component({
    selector:'my-product-overview',
    templateUrl: './product-overview.component.html',
    animations: [fadeInAnimation]
})

export class ProductOverviewComponent implements OnInit,OnDestroy {
    public id_overview:number;
    public sub:Subscription;
    constructor(private router:Router,
                private activatedRoute:ActivatedRoute){

    }
    // Get Param o component cha
    ngOnInit(){
        this.sub = this.activatedRoute.parent.params.subscribe(params => {
            this.id_overview = params["id"];
        })
    }
    ngOnDestroy(){
        this.sub.unsubscribe();
    }
}