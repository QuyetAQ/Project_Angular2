import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { fadeInAnimation } from '../../template/animations/fade-in.animation';
import { imgScaleAnimation } from '../../template/animations/img-scale.animation';

@Component({
    selector:'my-home-page',
    templateUrl: './homePage.component.html',
    animations: [fadeInAnimation,imgScaleAnimation]
})

export class HomePageComponent {
    public state: string = 'small';
    constructor(private router:Router){

    }
    GotoTraining(){
        this.router.navigate(['training']);
    };
    GotoForm(){
        this.router.navigate(['form']);
    };
    GotoProduct(){
        this.router.navigate(['product']);
    };
    // Animation Image
    imgScaleState() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
}