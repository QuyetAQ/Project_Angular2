import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './component/home/homePage.component';
import { TrainingComponent } from './component/training/training.component';
import { FormComponent } from './component/form/form.component';
import { ProductComponent } from './component/product/product.component';
import { Product1Component } from './component/product/product1.component';
import { Product2Component } from './component/product/product2.component';
import { NotfoundComponent } from './component/home/notfound.component';
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';
import { ProductOverviewComponent } from './component/product/product-overview/product-overview.component';
import { ProductSpecsComponent } from './component/product/product-specs/product-specs.component';
import { ProductEditComponent } from './component/product/product-edit/product-edit.component';
import { Product2EditComponent } from './component/product/product-edit/product2-edit.component';
import { ProductAddComponent } from './component/product/product-add/product-add.component';
import { LoginComponent } from './component/account/login/login.component';
import { LogOutComponent } from './component/account/logout/logout.component';
import { RegisterComponent } from './component/account/register/register.component';
import { CheckLoginGuard } from './component/account/login/check-login.guard';
import { InfoComponent } from './component/account/info/info.component';
// import { from } from 'rxjs/observable/from';

const routing = [

    // Redirecting
    { path: "", redirectTo: 'login', pathMatch: 'full'},
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "home", component: HomePageComponent, canActivate: [CheckLoginGuard] },
    { path: "logout", component: LogOutComponent, canActivate: [CheckLoginGuard] },
    { path: "info", component: InfoComponent, canActivate: [CheckLoginGuard] },
    { path: "training", component: TrainingComponent, canActivate: [CheckLoginGuard] },
    { path: "form", component: FormComponent , canActivate: [CheckLoginGuard] },
    { path: "product", component: ProductComponent, canActivate: [CheckLoginGuard] },
    { path: "product1", component: Product1Component, canActivate: [CheckLoginGuard] },
    { path: "product2", component: Product2Component, canActivate: [CheckLoginGuard] },
    { path: "product-edit/:id", component: ProductEditComponent, canActivate: [CheckLoginGuard] },
    { path: "product2-edit/:id", component: Product2EditComponent, canActivate: [CheckLoginGuard] },
    { path: "product-add", component: ProductAddComponent, canActivate: [CheckLoginGuard] },
    // Route definition with a parameter
    {
        path: "product-detail/:id", component: ProductDetailComponent,
        // Defining Child Routes
        children: [
            // { path: "", redirectTo: 'overview', pathMatch: 'full' },
            { path: "overview", component: ProductOverviewComponent },
            { path: "specs", component: ProductSpecsComponent }
        ]
    },
    { path: "**", component: NotfoundComponent }
];
// For all systems
export const appRoutes = RouterModule.forRoot(routing);
