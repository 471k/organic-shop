import { Component } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent 
{
  categories$: any;
  product: any = {};
  id: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute, //to read route parameters
    private catService: CategoryService,
    private productService: ProductService)
  {
    this.categories$ = catService.getCategories();

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if(this.id)
    {
      this.productService.get(this.id).pipe(take(1)).subscribe((p: any) => this.product = p);
    }
  }

  save(product: any)
  {
    if(this.id)
    {
      this.productService.update(this.id, product)
    }
    else
    {
      this.productService.create(product);
    }

    this.router.navigate(['/admin/products']);
  }
  
  delete()
  {
    if(!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }
}
