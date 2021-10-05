import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientsModule } from './clients/clients.module';
import { ClientsService } from './clients.service';
import { ProductModule } from './product/product.module';
import { ProductService } from './product.service';
import { PurchaseModule } from './purchase/purchase.module';
import { PurchaseService } from './purchase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    ProductModule,
    PurchaseModule
  ],
  providers: [
    ClientsService,
    ProductService,
    PurchaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
