import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {CustomerViewComponent} from './customer-view/customer-view.component';
import {ModuleWithProviders} from '@angular/core';
import {CustomerManagementComponent} from './customer-management/customer-management.component';
import {OrderManagementComponent} from './order-management/order-management.component';
import {ShippingManagementComponent} from './shipping-management/shipping-management.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: LandingComponent},
  {path: 'customer', component: CustomerManagementComponent},
  {path: 'customer/:customerId', component: CustomerViewComponent},
  {path: 'orders', component: OrderManagementComponent},
  {path: 'shipping', component: ShippingManagementComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
