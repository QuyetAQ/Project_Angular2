import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainingComponent } from './partials/training/training.component';
import { FormComponent } from './partials/form/form.component';
import { ProductComponent } from './partials/product/product.component'
import { ProductService } from './service/product.service'
import { FormsModule } from '@angular/forms';
import { ExponentialStrengthPipe } from './partials/training/exponential-strength.pipe';
// Service
import { HttpModule } from '@angular/http';
// Routing
import { appRoutes } from './app.routes';
import { HomePageComponent } from './partials/home/homePage.component';
import { NotfoundComponent } from './partials/home/notfound.component';
// Route definition with a parameter
import { ProductDetailComponent } from './partials/product/product-detail/product-detail.component';
// Defining Child Routes
import { ProductOverviewComponent } from './partials/product/product-overview/product-overview.component';
import { ProductSpecsComponent } from './partials/product/product-specs/product-specs.component';
// PUT : Update Object
import { ProductEditComponent } from './partials/product/product-edit/product-edit.component';
// POST : Add Object
import { ProductAddComponent } from './partials/product/product-add/product-add.component';
// Login Form
import { LoginComponent } from './partials/account/login/login.component';
// Logout
import { LogOutComponent } from './partials/account/logout/logout.component';
// Login Service
import { LoginService } from './service/login.service';
// Authentication Service
import { AuthenticationService } from './service/authentication.service';
// Register
import { RegisterComponent } from './partials/account/register/register.component';
// Check Login
import { CheckLoginGuard } from './partials/account/login/check-login.guard';
// Form Info
import { InfoComponent } from './partials/account/info/info.component';
// Header
import { HeaderComponent } from './template/header/header.component';
// Footer
import { FooterComponent } from './template/footer/footer.component';
import { from } from 'rxjs/observable/from';
// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
// Decorator add information to class AppModule
@NgModule({
  declarations: [AppComponent, TrainingComponent, FormComponent,
    ProductComponent, ExponentialStrengthPipe,
    // Routing
    HomePageComponent, NotfoundComponent,
    // Route definition with a parameter
    ProductDetailComponent,
    // Defining Child Routes
    ProductOverviewComponent, ProductSpecsComponent,
    // PUT : Update Object
    ProductEditComponent,
    // POST : Add Object
    ProductAddComponent,
    // Login form
    LoginComponent, LogOutComponent,
    // Register form
    RegisterComponent,
    // Form Info
    InfoComponent,
    // Header - Footer
    HeaderComponent,FooterComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes, BrowserAnimationsModule],
  // Service for all component
  providers: [ProductService, LoginService, CheckLoginGuard , AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
