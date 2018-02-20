import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './../../../service/login.service';
import { Subscription } from 'rxjs';
import { fadeInAnimation } from '../../../template/animations/fade-in.animation';
import { btnScaleAnimation } from '../../../template/animations/btn-scale.animation';

@Component({
    selector: 'my-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    animations: [fadeInAnimation,btnScaleAnimation]
})

export class RegisterComponent implements OnInit {
    public subcription: Subscription;
    public Account: any[];
    public maxRecord: number;
    public state: string = 'small';
    constructor(private router: Router,
        private loginService: LoginService,
        private activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
        this.loginService.GetAll().subscribe((respone: any) => {
            this.Account = respone;
            this.maxRecord = respone.length;
        }, error => {
            console.log("System error API");
            console.log(error);
        });
    }
    CheckRegister(user: any) {
        console.log(user);
        if(user.username && user.password) {
            for (let i = 0; i < this.maxRecord; i++) {
                if (user.username == this.Account[i].username) {
                    alert("You can't register with this account !");
                    break;
                }
                if (i == (this.maxRecord - 1)) {
                    this.loginService.AddAccount(user).subscribe((respone: any) => {
                        if (respone) {
                            alert("Register Success !");
                            this.router.navigate(['/login']);
                        } else {
                            alert("Register Fail !");
                        }
                    })
                }
            }
        } else if(!user.username){
            alert("Please input User Name !");
        } else if(!user.password){
            alert("Please input Password !");
        }
    }
    btnScaleState() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
}