import {Person} from './Person';
import {Address} from './Address';

export class Customer implements Person {
  private _customerId: number = -1;
  private _firstName: string = '';
  private _middleName: string = '';
  private _lastName: string = '';
  private _email: string = '';
  private _phoneNumber ?: string;
  private _birthDate: Date = new Date();
  private _homeAddress: Address;
  private _workAddress: Address;

  constructor(customerId: number = -1,
              firstName: string = '',
              middleName: string = '',
              lastName: string = '',
              email: string = '', // email?: string
              phoneNumber: string = '',
              birthDate: Date = new Date()) {
    this.customerId = customerId;
    this._firstName = firstName;
    this.middleName = middleName || '';
    this._lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.birthDate = birthDate;
  }

  get customerId(): number {
    return this._customerId;
  }

  set customerId(customerId: number) {
    this._customerId = customerId;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(firstName: string) {
    this._firstName = firstName;
  }

  get middleName(): string {
    return this._middleName;
  }

  set middleName(middleName: string) {
    this._middleName = middleName;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(lastName: string) {
    this._lastName = lastName;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get phoneNumber(): string {
    return this._phoneNumber || '+44 000 867-5309';
  }

  set phoneNumber(phoneNumber: string) {
    this._phoneNumber = phoneNumber;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(birthDate: Date) {
    this._birthDate = birthDate;
  }

  get fullName(): string {
    return this.firstName + ' ' + (this.middleName ? this.middleName + ' ' : '') + this.lastName;
  }


  get homeAddress(): Address {
    return this._homeAddress;
  }

  set homeAddress(value: Address) {
    this._homeAddress = value;
  }

  get workAddress(): Address {
    return this._workAddress;
  }

  set workAddress(value: Address) {
    this._workAddress = value;
  }

  public get age(): number {
    /* JavaScript numbers are stored as 64-bit floating point values with a 52-bit mantissa,
       11-bit exponent, and 1-bit sign flag.

       Since we are comparing against the CURRENT time, the calculated age would be changing every millisecond.
       Because of that, Angular would think that it is constantly changing.  Since we are calculating an AGE,
       we will clear the lower bits that represent the time within the day.
    */
    const millisecondsPerDay: number = 1000 * 3600 * 24;
    const now: number = Math.round(new Date().getTime() / millisecondsPerDay) * millisecondsPerDay;

    return (now - this.birthDate.getTime()) / (1000 * 3600 * 24 * 365.25);
  }
}
