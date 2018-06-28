import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerTableComponent} from '../customer-table/customer-table.component';
import {CustomerViewComponent} from '../customer-view/customer-view.component';
import {Customer} from '../models/Customer';

@Component({
  selector: 'tt-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {
  @ViewChild(CustomerTableComponent)
  private _customerTable: CustomerTableComponent;
  @ViewChild(CustomerViewComponent)
  private _customerView: CustomerViewComponent;
  private _selectedCustomer: Customer;

  constructor() {
  }

  ngOnInit() {
    this._customerTable.customerSelectedEventSource.subscribe(selectedCustomer => {
      // console.log("Got elected customer in Customer Management: ");
      // console.log(selectedCustomer);
      // this.selectedCustomer = selectedCustomer;
      this.customerView.customer = selectedCustomer;
    });
  }

  get customerTable(): CustomerTableComponent {
    return this._customerTable;
  }

  set customerTable(value: CustomerTableComponent) {
    this._customerTable = value;
  }

  get customerView(): CustomerViewComponent {
    return this._customerView;
  }

  set customerView(value: CustomerViewComponent) {
    this._customerView = value;
  }

  get selectedCustomer(): Customer {
    return this._selectedCustomer;
  }

  set selectedCustomer(value: Customer) {
    this._selectedCustomer = value;
  }
}
