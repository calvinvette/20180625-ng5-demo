import {Customer} from './Customer';

export class Order {
  constructor(
    private _orderId: number,
    private _orderDate: Date,
    private _customer: Customer,
    private _salesAmount: number,
    private _taxAmount: number,
    private _shippingAmount: number,
    private _status: String
  ) {}


  get orderId(): number {
    return this._orderId;
  }

  set orderId(value: number) {
    this._orderId = value;
  }

  get orderDate(): Date {
    return this._orderDate;
  }

  set orderDate(value: Date) {
    this._orderDate = value;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get salesAmount(): number {
    return this._salesAmount;
  }

  set salesAmount(value: number) {
    this._salesAmount = value;
  }

  get taxAmount(): number {
    return this._taxAmount;
  }

  set taxAmount(value: number) {
    this._taxAmount = value;
  }

  get shippingAmount(): number {
    return this._shippingAmount;
  }

  set shippingAmount(value: number) {
    this._shippingAmount = value;
  }

  get status(): String {
    return this._status;
  }

  set status(value: String) {
    this._status = value;
  }
}
