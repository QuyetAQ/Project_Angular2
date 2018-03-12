import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './../../../service/login.service';
import { AuthenticationService } from './../../../service/authentication.service';
import { Subscription } from 'rxjs';
import { fadeInAnimation } from '../../../template/animations/fade-in.animation';
import { btnScaleAnimation } from '../../../template/animations/btn-scale.animation';

@Component({
    selector: 'my-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [fadeInAnimation, btnScaleAnimation]
})

export class LoginComponent implements OnInit {
    public subcription: Subscription;
    public Account: any[];
    public maxRecord: number;
    public state: string = 'small';
    constructor(private router: Router,
        private loginService: LoginService,
        private activatedRoute: ActivatedRoute,
        private authenticationService:AuthenticationService) {
        
        localStorage.removeItem('isLogin');
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
    CheckLogin(user: any) {
        if(user.username && user.password) {
            for (let i = 0; i < this.maxRecord; i++) {
                if (user.username === this.Account[i].username && user.password === this.Account[i].password) {
                    // alert("Login Success");
                    this.loginService.SetLogin(true);
                    localStorage.setItem('user', JSON.stringify(this.Account[i]));
                    localStorage.setItem('isLogin', '1');
                    this.router.navigate(['/home']);
                    break;
                }
                if(i == (this.maxRecord -1)) {
                    alert("Error: Invalid UserName or Password");
                }
            }
        } else if(!user.username) {
            alert("Please input User Name !");
        } else {
            alert("Please input Password !");
        }
    };
    btnScaleState() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
}