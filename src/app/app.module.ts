import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {CustomerViewComponent} from './customer-view/customer-view.component';
import {AddressViewComponent} from './address-view/address-view.component';
import {LandingComponent} from './landing/landing.component';
import {RouterModule} from '@angular/router';
import {AppRouting} from './app.routing';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ShippingManagementComponent } from './shipping-management/shipping-management.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { ShippingTableComponent } from './shipping-table/shipping-table.component';
import { ShippingViewComponent } from './shipping-view/shipping-view.component';
import { OrderViewComponent } from './order-view/order-view.component';
import {CustomerLocalStorageService} from './customer-local-storage-service/customer-local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerViewComponent,
    AddressViewComponent,
    LandingComponent,
    CustomerManagementComponent,
    OrderManagementComponent,
    ShippingManagementComponent,
    CustomerTableComponent,
    OrderTableComponent,
    ShippingTableComponent,
    ShippingViewComponent,
    OrderViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule.forRoot(),
    AppRouting
  ],
  providers: [
    {provide: 'CustomerStorageService', useClass: CustomerLocalStorageService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
