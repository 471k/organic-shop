import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy{
  @Input('cart') cart!: ShoppingCart
  shipping: any = {};
  userSubscription!: Subscription;
  userId!: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService,
    private shoppingCartService: ShoppingCartService){

  }

  ngOnInit(){
    
    this.userSubscription = this.authService.user$.subscribe((user: any) => (this.userId = user?.uid));
  }
  ngOnDestroy(){
    
    this.userSubscription.unsubscribe();
  }
  
  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }
}