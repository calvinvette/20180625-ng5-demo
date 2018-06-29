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

  private _showCustomerView: boolean = false;


  constructor() {
  }

  ngOnInit() {
    this._customerTable.customerSelectedEventSource.subscribe(selectedCustomer => {
      // console.log("Got elected customer in Customer Management: ");
      // console.log(selectedCustomer);
      // this.selectedCustomer = selectedCustomer;
      this.customerView.customer = selectedCustomer;
    });
    this.customerView.customerUpdatedEventSource.subscribe(customerUpdated => {
      console.log("Customer Updated:");
      console.log(customerUpdated);
    });
    this.customerView.customerAddedEventSource.subscribe(customerAdded => {
      console.log("Customer Added:");
      console.log(customerAdded);
    });
  }


  public get showCustomerView(): boolean {
    return this._showCustomerView;
  }

  public set showCustomerView(showCustomerView: boolean) {
    this._showCustomerView = showCustomerView;
  }

  addCustomer() {
    this.showCustomerView = true;
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
