import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './partials/home/homePage.component';
import { TrainingComponent } from './partials/training/training.component';
import { FormComponent } from './partials/form/form.component';
import { ProductComponent } from './partials/product/product.component';
import { NotfoundComponent } from './partials/home/notfound.component';
import { ProductDetailComponent } from './partials/product/product-detail/product-detail.component';
import { ProductOverviewComponent } from './partials/product/product-overview/product-overview.component';
import { ProductSpecsComponent } from './partials/product/product-specs/product-specs.component';
import { ProductEditComponent } from './partials/product/product-edit/product-edit.component';
import { ProductAddComponent } from './partials/product/product-add/product-add.component';
import { LoginComponent } from './partials/account/login/login.component';
import { LogOutComponent } from './partials/account/logout/logout.component';
import { RegisterComponent } from './partials/account/register/register.component';
import { CheckLoginGuard } from './partials/account/login/check-login.guard';
import { InfoComponent } from './partials/account/info/info.component';
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
    { path: "product-edit/:id", component: ProductEditComponent },
    { path: "product-add", component: ProductAddComponent },
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
