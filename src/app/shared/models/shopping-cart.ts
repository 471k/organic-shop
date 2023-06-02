import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];
  
  constructor(private itemsMap: {[productId: string]: ShoppingCartItem}) {
    this.itemsMap = itemsMap || {};

    for(let productId in itemsMap)
    {
      let item = itemsMap[productId];
      let x = new ShoppingCartItem({
        // title: item.title,
        // imageUrl: item.imageUrl,
        // price: item.price,
        
        //when we apply this "..." operator to an object,
        //typescript will iterate over all the properties to an object
        // and add them here. so this "...item" is exactly as those 3 lines
        ...item,
        key: productId
      });
      
      // copy all the properties that we get "item" object from firebase into "x" object
      //Object.assign(target, source)
      // Object.assign(x, item);
      // x.key = productId;
      this.items.push(x);
    }
  }

  getQuantity(product: Product)
  {
    let item = this.itemsMap[product.key];
    return item ? item.quantity : 0;
  }
  
  get totalPrice(){
    let sum = 0;
    for(let productId in this.items)
    {
      sum += this.items[productId].totalPrice;
    }
    return sum;
  }

  get totalItemsCount() {
    let count: number = 0;
    for (let productId in this.itemsMap) {
      count += this.itemsMap[productId].quantity;
    }
    return count;
  }
}
