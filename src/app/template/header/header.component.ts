import {Component} from '@angular/core';
import { btnScaleAnimation } from '../../template/animations/btn-scale.animation';

@Component({
    selector:'my-header',
    templateUrl: './header.component.html',
    animations: [btnScaleAnimation]
})

export class HeaderComponent {
    public state: string = 'small';
    btnScaleState() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
}