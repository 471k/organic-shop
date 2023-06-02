import { Component } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {

  orders$: any;
  constructor(private orderService: OrderService){
    // orderService.getOrders().valueChanges().subscribe(orders => this.orders$ = orders);
    this.orders$ = orderService.getOrders();
    console.log(this.orders$);
  }
}
