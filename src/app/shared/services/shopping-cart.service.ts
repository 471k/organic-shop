import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Observable, map, take } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime(),
    });
  }

  // async getCart():Promise<AngularFireObject<ShoppingCart>> {
  async getCart():Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    
    return this.db.object('/shopping-carts/' + cartId).valueChanges().pipe(
      map((x: any) => new ShoppingCart(x.items))
    );
    // return this.db.object('/shopping-carts/' + cartId);
  }

  private getItem(cartId: string, productId: string)
  {
    return this.db.object(`/shopping-carts/${cartId}/items/${productId}`);    
  }

  async clearCart()
  {
    let cartId = await this.getOrCreateCartId();
    // this.db.object('/shopping-carts/' + cartId + '/items').remove();

    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  // instead of using promises using .then(), we use async and await keywords
  private async getOrCreateCartId(): Promise<string>
  {
    // Get the cartId from the localstorage
    let cartId = localStorage.getItem('cartId');

    if (cartId) return cartId;

    let result: any = await this.create();
    // store the cart id in the local storage
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(product: Product) {
    this.updateItem(product, +1)

    // let cartId = await this.getOrCreateCartId();

    // // let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);
    // let item$ = this.getItem(cartId, product.key);

    // item$
    //   .valueChanges()
    //   .pipe(take(1))
    //   .subscribe((item: any) => {
    //     item$.update( { product: product, quantity: (item?.quantity || 0) + 1 } );
    //   });
  }

  async removeFromCart(product: Product)
  {
    this.updateItem(product, -1);

    // let cartId = await this.getOrCreateCartId();

    // let item$ = this.getItem(cartId, product.key)

    // item$.valueChanges().pipe(take(1)).subscribe((item: any) =>{
    //   item$.update( {product: product, quantity: (item?.quantity || 0) - 1 } )
    // });
  }

  private async updateItem(product: Product, change: number)
  {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.key)
    item$.valueChanges().pipe(take(1)).subscribe((item: any) => {
      let quantity = (item?.quantity || 0) + change;
      if(quantity === 0) item$.remove();
      else{
      item$.update( {
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: quantity})
      }
    });
  }
}

