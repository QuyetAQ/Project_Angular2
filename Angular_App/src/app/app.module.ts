import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainingComponent } from './component/training/training.component';
import { FormComponent } from './component/form/form.component';
import { ProductComponent } from './component/product/product.component';
import { Product1Component } from './component/product/product1.component';
import { Product2Component } from './component/product/product2.component';
import { ProductService } from './service/product.service';
import { FormsModule } from '@angular/forms';
import { ExponentialStrengthPipe } from './component/training/exponential-strength.pipe';
// Service
import { HttpModule } from '@angular/http';
// Routing
import { appRoutes } from './app.routes';
import { HomePageComponent } from './component/home/homePage.component';
import { NotfoundComponent } from './component/home/notfound.component';
// Route definition with a parameter
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';
// Defining Child Routes
import { ProductOverviewComponent } from './component/product/product-overview/product-overview.component';
import { ProductSpecsComponent } from './component/product/product-specs/product-specs.component';
// PUT : Update Object
import { ProductEditComponent } from './component/product/product-edit/product-edit.component';
import { Product2EditComponent } from './component/product/product-edit/product2-edit.component';
// POST : Add Object
import { ProductAddComponent } from './component/product/product-add/product-add.component';
// Login Form
import { LoginComponent } from './component/account/login/login.component';
// Logout
import { LogOutComponent } from './component/account/logout/logout.component';
// Login Service
import { LoginService } from './service/login.service';
// Authentication Service
import { AuthenticationService } from './service/authentication.service';
// Register
import { RegisterComponent } from './component/account/register/register.component';
// Check Login
import { CheckLoginGuard } from './component/account/login/check-login.guard';
// Form Info
import { InfoComponent } from './component/account/info/info.component';
// Header
import { HeaderComponent } from './template/header/header.component';
// Footer
import { FooterComponent } from './template/footer/footer.component';
import { from } from 'rxjs/observable/from';
// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Config Url mySQL
import { Configuration } from './service/configuration.service';
import { DataService } from './service/data.service';


// Decorator add information to class AppModule
@NgModule({
  declarations: [AppComponent, TrainingComponent, FormComponent,
    ProductComponent, Product1Component, Product2Component, ExponentialStrengthPipe,
    // Routing
    HomePageComponent, NotfoundComponent,
    // Route definition with a parameter
    ProductDetailComponent,
    // Defining Child Routes
    ProductOverviewComponent, ProductSpecsComponent,
    // PUT : Update Object
    ProductEditComponent,Product2EditComponent,
    // POST : Add Object
    ProductAddComponent,
    // Login form
    LoginComponent, LogOutComponent,
    // Register form
    RegisterComponent,
    // Form Info
    InfoComponent,
    // Header - Footer
    HeaderComponent, FooterComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes, BrowserAnimationsModule],
  // Service for all component
  providers: [ProductService, LoginService, CheckLoginGuard, 
      AuthenticationService,Configuration, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
