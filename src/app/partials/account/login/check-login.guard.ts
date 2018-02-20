import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './../../../service/login.service';

@Injectable()
export class CheckLoginGuard implements CanActivate {
    constructor(private router: Router,
                private loginService: LoginService) {

    }
    canActivate(): boolean {
        if (localStorage.getItem('user')) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}