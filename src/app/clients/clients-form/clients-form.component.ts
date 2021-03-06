import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Client } from './client';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  client: Client;
  success: Boolean = false;
  erros: String[];
  id: number;

  constructor( 
    private service : ClientsService,
    private router : Router,
    private activatedRoute : ActivatedRoute
    ) { 
    this.client = new Client();
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this.service
          .findById(this.id)
          .subscribe( 
            response => this.client = response ,
            errorReponse => this.client = new Client());
      }
    })
  }

  onSubmit() {
    if(this.id) {
      this.service
        .update(this.client)
        .subscribe(response => {
          this.success = true;
          this.erros = null;
        }, errorResponse => {
          this.erros = ['Erro ao atualizar o cliente.']
        })
    } else {
      this.service
          .save(this.client)
          .subscribe( response =>{
              this.success = true;
              this.erros = null;
              this.client = response;
          },  errorResponse => {
              this.success = false;
              this.erros = errorResponse.error.erros;
          }
          );
    }
  }

  backToList() {
    this.router.navigate(['/clients-list']);
  }
}
