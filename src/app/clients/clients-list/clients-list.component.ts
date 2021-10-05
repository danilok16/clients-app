import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/clients.service';
import { Client } from '../clients-form/client';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Client[] = [];
  selectedClient: Client;
  successMessage: string;
  errorMessage: string;

  constructor(
    private service: ClientsService, 
    private router: Router) { }

  ngOnInit(): void {
    this.service
        .getClients()
        .subscribe (response => this.clients = response)
  }

  newClient() {
    this.router.navigate(['/clients-form'])
  }

  prepareToDelete(client : Client) {
    this.selectedClient = client;
  }

  deleteClient() {
    this.service
      .delete(this.selectedClient)
      .subscribe( 
        response => {
          this.successMessage = 'Cliente deletado com sucesso!'
          this.ngOnInit();
        },
        errorResponse => this.errorMessage = 'Ocorreu um erro ao deletar o cliente.'
      );
  }

}
