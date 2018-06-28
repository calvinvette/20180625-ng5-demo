export class Address {
  private _addressId: number = -1;
  private _line1: String;
  private _line2: String;
  private _line3: String;
  private _city: String;
  private _state: String;
  private _country: String;
  private _postalCode: String;

  constructor(addressId: number, line1: String, line2: String, line3: String, city: String, state: String, country: String, postalCode: String) {
    this._addressId = addressId;
    this._line1 = line1;
    this._line2 = line2;
    this._line3 = line3;
    this._city = city;
    this._state = state;
    this._country = country;
    this._postalCode = postalCode;
  }

  get addressId(): number {
    return this._addressId;
  }

  set addressId(value: number) {
    this._addressId = value;
  }

  get line1(): String {
    return this._line1;
  }

  set line1(value: String) {
    this._line1 = value;
  }

  get line2(): String {
    return this._line2;
  }

  set line2(value: String) {
    this._line2 = value;
  }

  get line3(): String {
    return this._line3;
  }

  set line3(value: String) {
    this._line3 = value;
  }

  get city(): String {
    return this._city;
  }

  set city(value: String) {
    this._city = value;
  }

  get state(): String {
    return this._state;
  }

  set state(value: String) {
    this._state = value;
  }

  get country(): String {
    return this._country;
  }

  set country(value: String) {
    this._country = value;
  }

  get postalCode(): String {
    return this._postalCode;
  }

  set postalCode(value: String) {
    this._postalCode = value;
  }
}
