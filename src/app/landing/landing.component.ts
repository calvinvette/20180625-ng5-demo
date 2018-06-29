import {Component, OnInit} from '@angular/core';
import {Customer} from '../models/Customer';
import {CustomerStorageServiceImpl} from '../services/customer-storage.service';

@Component({
  selector: 'tt-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  private _title = 'Weasley\'s';
  private _now: Date = new Date();
  private _firstName: String = 'Harry';
  private _birthDate: Date = new Date(1980, 6, 31);
  private _customers: Customer[] = [];

  constructor(private customerStorageService: CustomerStorageServiceImpl) {
    // TODO - Fix Injection
    // this.customerStorageService.findAll().subscribe(custs => {
    //   this.customers = custs;
    //   const earliestDate: Date = new Date(1980, 0, 1);
    //   this.customers.forEach(customer => customer.birthDate = LandingComponent.randomDate(earliestDate));
    //
    // });
  }

  ngOnInit() {
  }


  private static randomDate(start: Date, end: Date = new Date()): Date {
    const randomDateInMilliseconds: number = start.getTime() + (end.getTime() - start.getTime()) * Math.random();
    return new Date(randomDateInMilliseconds);
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get now(): Date {
    return this._now;
  }

  set now(value: Date) {
    this._now = value;
  }

  get firstName(): String {
    return this._firstName;
  }

  set firstName(value: String) {
    this._firstName = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this._birthDate = value;
  }

  public get customers(): Customer[] {
    return this._customers;
  }

  public set customers(value: Customer[]) {
    this._customers = value;
  }
}
