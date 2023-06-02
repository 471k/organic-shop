import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AppUser } from 'src/app/shared/models/app-user';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{
  appUser!: AppUser;
  cart$: Observable<ShoppingCart> | undefined

  constructor(
    public auth: AuthService, 
    private shoppingCartService: ShoppingCartService) {
  }

  async ngOnInit(){
    this.auth.appUser$.subscribe((appUser: any) => this.appUser = appUser)
    this.cart$ = await this.shoppingCartService.getCart();
    
    // cart$.valueChanges().subscribe((cart: any) => {
      
    // });
  }
  
  logout() {
    this.auth.logout();
  }
}