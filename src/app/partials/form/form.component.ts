import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector:'my-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent {
    public cities = [
        {Id:1, Name:'Ha Noi'},
        {Id:2, Name:'Da Nang'},
        {Id:3, Name:'Sai Gon'}
    ];

    onSubmit(value:any){
        console.log(value);
    }
    constructor(private router:Router){
        
    }
    BacktoHome(){
        this.router.navigate(['/home']);
    }
}