// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// //form module used with ngModel
// import { FormsModule } from '@angular/forms';

// //vlaidation library
// //npm install ng2-validation --save
// import { CustomFormsModule } from 'ng2-validation'

// //table library
// //PrimeNG datatable 
// import { TableModule } from 'primeng/table';
// import { ButtonModule } from 'primeng/button';



// //Firebase modules
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';

// //ng-bootstrap module
// //ng add @ng-bootstrap/ng-bootstrap
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// //router
// import { RouterModule } from '@angular/router';

// //environment
// import { environment } from 'src/environments/environment';

// //components
// import { AppComponent } from './app.component';
// import { ProductsComponent } from 'src/app/shopping/components/products/products.component';


// import { LoginComponent } from './core/components/login/login.component';

// import { SharedModule } from 'src/app/shared/shared.module';
// import { AdminModule } from './admin/admin.module';
// import { ShoppingModule } from './shopping/shopping.module';
// import { CoreModule } from './core/core.module';
// import { AdminAuthGuardService as AdminAuthGuard } from './admin/services/admin-auth-guard.service';


// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     SharedModule,
//     AdminModule,
//     ShoppingModule,
//     CoreModule,
//     // FormsModule,
//     // CustomFormsModule,
//     BrowserAnimationsModule ,
//     //prime modules
//     // TableModule,
//     // ButtonModule,

//     //angular fire modules
//     AngularFireModule.initializeApp(environment.firebase),
  

//     RouterModule.forRoot([
      
//         //routes for anonymous users
//       { path: '', component: ProductsComponent },
//       { path: 'login', component: LoginComponent },
//     ])
//   ],
//   providers: [
//     AdminAuthGuard
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';

import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AdminAuthGuardService as AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
    ])    
  ],
  providers: [
    AdminAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
