// // ctrl+alt+o = orders them alphabetically
// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';

// import { ProductCardComponent } from './components/product-card/product-card.component';
// import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
// import { AuthGuardService } from './services/auth-guard.service';
// import { AuthService } from './services/auth.service';
// import { CategoryService } from './services/category.service';
// import { OrderService } from './services/order.service';
// import { ProductService } from './services/product.service';
// import { ShoppingCartService } from './services/shopping-cart.service';
// import { UserService } from './services/user.service';
// import { FormsModule } from '@angular/forms';
// import { CustomFormsModule } from 'ng2-validation';
// import { TableModule } from 'primeng/table';
// import { ButtonModule } from 'primeng/button';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     CustomFormsModule,
//     TableModule,
    
//     ButtonModule,
//     AngularFireDatabaseModule,
//     AngularFireAuthModule,
//     NgbModule
//   ],
//   declarations: [
//     ProductCardComponent,
//     ProductQuantityComponent,
//   ],
//   exports: [
//     ProductCardComponent,
//     ProductQuantityComponent,
//     CommonModule,
//     FormsModule,
//     CustomFormsModule,
//     TableModule,
//     ButtonModule,
//     AngularFireDatabaseModule,
//     AngularFireAuthModule,
//     NgbModule
//   ],
//   providers: [
//     AuthService,
//     AuthGuardService,
//     UserService,
//     CategoryService,
//     ProductService,
//     ShoppingCartService,
//     OrderService
//   ]
// })
// export class SharedModule { }


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    TableModule,
    ButtonModule,

    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    TableModule,
    ButtonModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
