import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/clients/clients-form/client';
import { Product } from 'src/app/product/product-form/product';
import { PurchaseService } from 'src/app/purchase.service';
import { Purchase } from './purchase';
import { ClientsService } from 'src/app/clients.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})
export class PurchaseFormComponent implements OnInit {

  purchase: Purchase;
  clients: Client[] = [];
  products: Product[] = [];
  success: Boolean = false;
  erros: String[];
  id: number;

  constructor( 
    private service : PurchaseService,
    private clientService: ClientsService,
    private productService: ProductService,
    private router : Router,
    private activatedRoute : ActivatedRoute
    ) { 
    this.purchase = new Purchase();
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this.service
          .findById(this.id)
          .subscribe( 
            response => this.purchase = response ,
            errorReponse => this.purchase = new Purchase());
      }
    });

    this.clientService
    .getClients()
    .subscribe( response => this.clients = response);

    this.productService
    .getProducts()
    .subscribe( response => this.products = response);

  }

  onSubmit() {
    if(this.id) {
      this.service
        .update(this.purchase)
        .subscribe(response => {
          this.success = true;
          this.erros = null;
        }, errorResponse => {
          this.erros = ['Erro ao atualizar o produto.']
        })
    } else {
      this.service
          .save(this.purchase)
          .subscribe( response =>{
              this.success = true;
              this.erros = null;
              this.purchase = response;
          },  errorResponse => {
              this.success = false;
              this.erros = errorResponse.error.erros;
          }
          );
    }
  }

  backToList() {
    this.router.navigate(['/purchase-list']);
  }
}
