import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';

@NgModule({
  declarations: [PurchaseFormComponent, PurchaseListComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    FormsModule
  ],
  exports:[
    PurchaseFormComponent,
    PurchaseListComponent
  ]
})
export class PurchaseModule { }
