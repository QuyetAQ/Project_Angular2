import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LoginService } from './service/login.service';

// Decorator quy dinh metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Angular2';
  public image = 'http://lorempixel.com/100/100/';
  public input_text = 'Input name';
  public time = Date.now();

  constructor(private loginServe:LoginService) {
  }
  
  userIsLogged(){
    if(JSON.parse(localStorage.getItem('isLogin')) == '1') {
      return true;
    } 
    return false;
  }
  // preparefadeInAnimation(outlet){
  //   const animation = outlet.activatedRouteData['animation'] || {};
  //   return animation['value'] || null;
  // }
}
