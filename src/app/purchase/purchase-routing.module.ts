import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component' 
import { PurchaseListComponent } from './purchase-list/purchase-list.component';

const routes: Routes = [
  { path: 'purchase-form', component:  PurchaseFormComponent},
  { path: 'purchase-form/:id', component:  PurchaseFormComponent},
  { path: 'purchase-list', component: PurchaseListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
