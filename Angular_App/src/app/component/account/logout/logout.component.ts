import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'my-logout',
  templateUrl: './logout.component.html'
})
export class LogOutComponent {
  public isLogin: boolean;
  public AccLogin: any;

  constructor(private router: Router, private loginService: LoginService) {
    this.isLogin = this.loginService.IsLogged();
    this.loginService.SetLogin(false);
    // alert("Logout Success");
    localStorage.removeItem("user");
    localStorage.removeItem("isLogin");
    // localStorage.clear();
    this.router.navigate(['/login']);
  }
}
