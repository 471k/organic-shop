import { Product } from "./product";

export class ShoppingCartItem{
    key!: string;
    title!: string;
    imageUrl!: string;
    price!: number;
    quantity!: number;

    /**
     * 
     * @param init of type Partial is set to optional
     * Partial is a generic class.
     * init is an object that looks like a ShoppingCartItem object.
     * It can have one or more properties.
     */
    constructor(init?: Partial<ShoppingCartItem>) {
        //to copy all those properties from init, into this current object
        Object.assign(this, init)
    }

    get totalPrice (){
        return this.price * this.quantity
    }
}