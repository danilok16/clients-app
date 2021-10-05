import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from '../product-form/product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  selectedProduct: Product;
  successMessage: string;
  errorMessage: string;

  constructor(
    private service: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
    this.service
        .getProducts()
        .subscribe (response => this.products = response)
  }

  newProduct() {
    this.router.navigate(['/product-form'])
  }

  prepareToDelete(client : Product) {
    this.selectedProduct = client;
  }

  deleteProduct() {
    this.service
      .delete(this.selectedProduct)
      .subscribe( 
        response => {
          this.successMessage = 'Produto deletado com sucesso!'
          this.ngOnInit();
        },
        errorResponse => this.errorMessage = 'Ocorreu um erro ao deletar o produto.'
      );
  }

}