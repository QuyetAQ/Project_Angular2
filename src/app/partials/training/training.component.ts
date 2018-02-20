import {Component} from '@angular/core';
import {Router} from '@angular/router';
// import { fadeInAnimation } from '../../template/animations/fade-in.animation';

@Component({
    selector:'my-employee',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.css']
    // animations: [fadeInAnimation]
})
export class TrainingComponent {
     public fName:string;
     public lName:string;
    // Event binding
    onClickFullName(fName, lName) {
        console.log(fName + ' '+ lName);
    }
    // *ngIf
    public show_line:boolean = true;
    // *ngSwitch
    public color = 'green';
    // *ngFor
    public colors:string[] = ['red','blue','green'];
    // *ngClass *ngStyle
    public ngclass1 = true;
    public ngclass2 = true;
    toggle(){
        this.ngclass1 = !this.ngclass1;
        this.ngclass2= !this.ngclass2;
    }
    // *ngStyle
    public fontstyle:'italic';
    public size:'12pt';
    public country:string[] = ['England', 'Germany', 'USA', 'France'];
    // Pipes Custome Define
    public power:string = '1';
    public factor:number = 1;

    constructor(private router:Router) {

    }
    BacktoHome(){
        this.router.navigate(['/home']);
    }

}   