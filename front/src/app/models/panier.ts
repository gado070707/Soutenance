import { Product } from './product.model';

export class Panier {
    products: Product[][];
    quantity: {id: number, value: number};

    // add(product: Product, qty = 1) {
    //     this.products.push(product);
    // }
}