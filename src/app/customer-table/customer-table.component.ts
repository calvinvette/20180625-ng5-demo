import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {Customer} from '../models/Customer';
import {CustomerViewComponent} from '../customer-view/customer-view.component';
import {CustomerStorageService, CustomerStorageServiceImpl} from '../services/customer-storage.service';
import {CustomerLocalStorageService} from '../customer-local-storage-service/customer-local-storage.service';

@Component({
  selector: 'tt-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  private _customers: Customer[] = [];
  private _selectedCustomer: Customer;
  private _customerSelectedEventSource: EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor(private customerStorageService: CustomerStorageServiceImpl) {
    // this._customers = CustomerViewComponent.getAllCustomers();
    this.customerStorageService.findAll().subscribe(foundCustomers => {
      this.customers = foundCustomers;
    });
  }

  ngOnInit() {
  }

  get customers(): Customer[] {
    return this._customers;
  }

  set customers(value: Customer[]) {
    this._customers = value;
  }

  get selectedCustomer(): Customer {
    return this._selectedCustomer;
  }

  set selectedCustomer(customer: Customer) {
    this._selectedCustomer = customer;
    // console.log("Selected customer: ");
    // console.log(customer);
    this.customerSelectedEventSource.emit(this.selectedCustomer);
  }


  get customerSelectedEventSource(): EventEmitter<Customer> {
    return this._customerSelectedEventSource;
  }

  set customerSelectedEventSource(value: EventEmitter<Customer>) {
    this._customerSelectedEventSource = value;
  }
}
