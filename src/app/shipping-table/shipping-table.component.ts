import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Shipment} from '../models/Shipment';

@Component({
  selector: 'tt-shipping-table',
  templateUrl: './shipping-table.component.html',
  styleUrls: ['./shipping-table.component.css']
})
export class ShippingTableComponent implements OnInit {
  private _shipments: Shipment[] = [];
  private _selectedShipment: Shipment;

  private _shipmentSelectedEventSource: EventEmitter<Shipment> = new EventEmitter<Shipment>();

  constructor() {
    this._shipments.push(new Shipment(4113, new Date(2018, 4, 13), "OWL", new Date(2018, 4, 20)));
    this._shipments.push(new Shipment(4145, new Date(2018, 3, 23), "OWL", new Date(2018, 4, 20)));
    this._shipments.push(new Shipment(7464, new Date(2018, 5, 30), "OWL", new Date(2018, 4, 20)));
    this._shipments.push(new Shipment(7331, new Date(2018, 6, 1), "DHL", new Date(2018, 4, 20)));
    this._shipments.push(new Shipment(2533, new Date(2017, 4, 19), "OWL", new Date(2018, 4, 20)));
    this._shipments.push(new Shipment(4156, new Date(2017, 10, 3), "UPS3G", new Date(2018, 4, 20)));
    this._shipments.push(new Shipment(7843, new Date(2017, 11, 21), "OWL", new Date(2018, 4, 20)));
    this._shipments.push(new Shipment(9456, new Date(2018, 1, 4), "FDX2G", new Date(2018, 4, 20)));
    this._shipments.push(new Shipment(6321, new Date(2018, 2, 7), "FDXON", new Date(2018, 4, 20)));
  }

  ngOnInit() {
  }

  selectShipment(selected) {
    this.selectedShipment = selected;
    console.log("Selected:");
    console.log(this._selectedShipment);
    this.shipmentSelectedEventSource.emit(this.selectedShipment);
  }

  get shipments(): Shipment[] {
    return this._shipments;
  }

  @Input()
  set shipments(value: Shipment[]) {
    this._shipments = value;
  }

  get selectedShipment(): Shipment {
    return this._selectedShipment;
  }

  @Input()
  set selectedShipment(value: Shipment) {
    this._selectedShipment = value;
  }

  @Output()
  get shipmentSelectedEventSource(): EventEmitter<Shipment> {
    return this._shipmentSelectedEventSource;
  }

  set shipmentSelectedEventSource(value: EventEmitter<Shipment>) {
    this._shipmentSelectedEventSource = value;
  }
}
