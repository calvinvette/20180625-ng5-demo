import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Shipment} from '../models/Shipment';
import {ShippingTableComponent} from '../shipping-table/shipping-table.component';
import {ShippingViewComponent} from '../shipping-view/shipping-view.component';

@Component({
  selector: 'tt-shipping-management',
  templateUrl: './shipping-management.component.html',
  styleUrls: ['./shipping-management.component.css']
})
export class ShippingManagementComponent implements OnInit, AfterViewInit {
  private _selectedShipment: Shipment = new Shipment();
  @ViewChild(ShippingTableComponent)
  private shippingTable: ShippingTableComponent;
  @ViewChild(ShippingViewComponent)
  private shippingView: ShippingViewComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.shippingTable.shipmentSelectedEventSource.subscribe(sel => {
      console.log("Table Selected: ");
      console.log(sel);
      this.shippingView.shipment = sel;
    });
  }

  get selectedShipment(): Shipment {
    return this._selectedShipment;
  }

  @Input()
  set selectedShipment(value: Shipment) {
    this._selectedShipment = value;
  }

}
