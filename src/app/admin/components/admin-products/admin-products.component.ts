import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {


  products: Product[] = [];
  filteredProducts: any = [];
  subscription: Subscription | undefined;
  dataAdapter: any;
  columns: any;
  rendered: any;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe((products: any) => {
      
      // console.log('products', products[0].key);
        this.filteredProducts = this.products = products.map((item: any) => (
        {
          title: item.payload.val().title,
          price: item.payload.val().price,
          category: item.payload.val().category,
          imageUrl: item.payload.val().imageUrl,
          id: item.key
        })
        );
        console.log("filteredProducts: ", this.filteredProducts);
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  filter(query: string) {
    let querylower = query.toLowerCase();
    this.filteredProducts = query ? this.products.filter((p: any) =>
      p.title.toLowerCase().includes(querylower)
    ) : this.products;

  }
}