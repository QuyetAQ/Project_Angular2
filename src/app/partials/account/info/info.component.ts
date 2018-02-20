import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './../../../service/login.service';
import { Subscription } from 'rxjs';
import { fadeInAnimation } from '../../../template/animations/fade-in.animation';

@Component({
    selector: 'my-info',
    templateUrl: './info.component.html',
    animations: [fadeInAnimation]
})

export class InfoComponent implements OnInit {
    public subcription: Subscription;
    public Account:any;
    constructor(private router: Router,
        private loginService: LoginService,
        private activatedRoute: ActivatedRoute) {
        
    }
    ngOnInit() {
        this.Account = JSON.parse(localStorage.getItem('user'))
    }
    DeleteAccount(id:number) {
        if(confirm('Do you want delete Account ?')) {
            this.loginService.RemoveAccount(this.Account.id).subscribe(respone=> {
                if(respone) {
                    alert('Delete Account Success. Back to Login !');
                    this.router.navigate(['/logout']);
                } else {
                    alert('Delete Account Fail');
                }
            })
        }
    }
    GotoHome() {
        this.router.navigate(['/home']);
    }
}