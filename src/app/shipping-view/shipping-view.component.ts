import {Component, Input, OnInit} from '@angular/core';
import {Shipment} from '../models/Shipment';

@Component({
  selector: 'tt-shipping-view',
  templateUrl: './shipping-view.component.html',
  styleUrls: ['./shipping-view.component.css']
})
export class ShippingViewComponent implements OnInit {
  private _shipmentId: number = -1;

  private _shipment: Shipment;

  constructor() {
  }

  ngOnInit() {
  }

  get shipmentId(): number {
    return this._shipmentId;
  }

  @Input()
  set shipmentId(value: number) {
    this._shipmentId = value;
  }

  get shipment(): Shipment {
    return this._shipment;
  }

  @Input()
  set shipment(value: Shipment) {
    this._shipment = value;
  }
}
