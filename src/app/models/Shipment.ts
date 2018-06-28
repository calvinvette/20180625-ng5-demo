export class Shipment {
  constructor(
    private _shipmentId: number = -1,
    private _shipDate: Date = new Date(),
    private _method: String = "OWL",
    private _deliveryDate: Date = new Date()
  ) {
  }

  get shipmentId(): number {
    return this._shipmentId;
  }

  set shipmentId(value: number) {
    this._shipmentId = value;
  }

  get shipDate(): Date {
    return this._shipDate;
  }

  set shipDate(value: Date) {
    this._shipDate = value;
  }

  get method(): String {
    return this._method;
  }

  set method(value: String) {
    this._method = value;
  }

  get deliveryDate(): Date {
    return this._deliveryDate;
  }

  set deliveryDate(value: Date) {
    this._deliveryDate = value;
  }
}
