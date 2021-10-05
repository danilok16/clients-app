import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from './product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product;
  success: Boolean = false;
  erros: String[];
  id: number;

  constructor( 
    private service : ProductService,
    private router : Router,
    private activatedRoute : ActivatedRoute
    ) { 
    this.product = new Product();
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this.service
          .findById(this.id)
          .subscribe( 
            response => this.product = response ,
            errorReponse => this.product = new Product());
      }
    })
  }

  onSubmit() {
    if(this.id) {
      this.service
        .update(this.product)
        .subscribe(response => {
          this.success = true;
          this.erros = null;
        }, errorResponse => {
          this.erros = ['Erro ao atualizar o produto.']
        })
    } else {
      this.service
          .save(this.product)
          .subscribe( response =>{
              this.success = true;
              this.erros = null;
              this.product = response;
          },  errorResponse => {
              this.success = false;
              this.erros = errorResponse.error.erros;
          }
          );
    }
  }

  backToList() {
    this.router.navigate(['/product-list']);
  }

}
