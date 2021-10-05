import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/purchase.service';
import { Purchase } from '../purchase-form/purchase';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {

  purchases: Purchase[] = [];
  selectedPurchase: Purchase;
  successMessage: string;
  errorMessage: string;

  constructor(
    private service: PurchaseService, 
    private router: Router) { }

  ngOnInit(): void {
    this.service
        .getPurchases()
        .subscribe (response => this.purchases = response);

    console.log(this.purchases);
    console.log('ola');
  }

  newPurchase() {
    this.router.navigate(['/purchase-form'])
  }

  prepareToDelete(purchase : Purchase) {
    this.selectedPurchase = purchase;
  }

  deletePurchase() {
    this.service
      .delete(this.selectedPurchase)
      .subscribe( 
        response => {
          this.successMessage = 'Venda deletada com sucesso!'
          this.ngOnInit();
        },
        errorResponse => this.errorMessage = 'Ocorreu um erro ao deletar a venda.'
      );
  }

}
