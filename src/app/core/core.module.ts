// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
// import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
// import { RouterModule } from '@angular/router';
// import { SharedModule } from 'primeng/api';


// @NgModule({
//   declarations: [
//     BsNavbarComponent,
//     HomeComponent,
//     LoginComponent
//   ],
//   imports: [
//     SharedModule,
//     RouterModule.forChild([])
//   ],
//   exports: [
//     BsNavbarComponent
//   ]
// })
// export class CoreModule { }


import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,        
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
