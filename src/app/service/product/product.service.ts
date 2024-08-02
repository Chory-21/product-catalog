import { Injectable } from '@angular/core';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products : Product []= [
    new Product(1, 'Smartphone' , 3500 , 100),
    new Product(2,'Laptop', 3500 ,200),
    new Product(3,'Mouse', 3500 ,400),
    new Product(4,'Keyboard', 3500 ,600)
  ]

  getProducts():Product[] {
    return this.products;
  }

}
