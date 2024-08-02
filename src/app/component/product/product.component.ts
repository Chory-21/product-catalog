import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,MatListModule, MatCardModule, MatTableModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products:Product[] = [];
  displayedColumns: string[]=['Id', 'Name', 'Price', 'Stock' ]

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    console.log('ProductComponent - ngOnInit');
    this.products = this.productService.getProducts();
  }

}
