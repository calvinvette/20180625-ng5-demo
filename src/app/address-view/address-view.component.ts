import {Component, Input, OnInit} from '@angular/core';
import {Address} from '../models/Address';

@Component({
  selector: 'tt-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent implements OnInit {
  private _addressId: number = -1;
  private _address: Address;

  constructor() {
  }

  ngOnInit() {
  }

  get address(): Address {
    return this._address;
  }

  @Input()
  set address(value: Address) {
    this._address = value;
  }

  get addressId(): number {
    return this._addressId;
  }

  @Input()
  set addressId(value: number) {
    this._addressId = value;
  }
}
