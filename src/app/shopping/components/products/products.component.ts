import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { switchMap, Observable } from 'rxjs';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string | null = '';
  cart$!: Observable<ShoppingCart>;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private  categoryService: CategoryService,
    private shoppingCartService: ShoppingCartService) 
  { }

  async ngOnInit(){
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();   
  }

  private populateProducts(){

    this.productService.getAll().pipe(
      switchMap((products: any) => {
        // this.products = products;

        this.products = products.map((item: any) => ({
          title: item.payload.val().title,
          imageUrl: item.payload.val().imageUrl,
          price: item.payload.val().price,
          category: item.payload.val().category,
          key: item.key,
        }));
        return this.route.queryParamMap;
      })).subscribe((params: any) => {
        this.category = params.get('category');
        this.applyFilter();        
    });
  }

  private applyFilter()
  {
    this.filteredProducts = this.category
      ? this.products.filter((p: any) => p.category === this.category)
      : this.products;
  }

}
