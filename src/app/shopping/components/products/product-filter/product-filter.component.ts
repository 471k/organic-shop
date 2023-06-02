import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  categories$: Observable<any>;
  @Input("category") category: string | null = '';

  constructor(categoryService: CategoryService){
    this.categories$ = categoryService.getCategories();
    
  }

}
