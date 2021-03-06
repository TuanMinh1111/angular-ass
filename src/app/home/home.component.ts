import { Component, OnInit } from '@angular/core';

import { Product } from "../Product";
import { ProductService } from '../services/product.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  constructor(
    private productService: ProductService
    ){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(response => this.products = response, error => console.log(error));
  }
  
  //  products = data;

  //  selected: Product;
  //   showDetail(product){
  //     this.selected = product;
  //   }
  removeItem(id) {
    // this.products = this.productService.removeProduct(id);
    // return this.products = this.products.filter(product => product.id != id);
  }

}