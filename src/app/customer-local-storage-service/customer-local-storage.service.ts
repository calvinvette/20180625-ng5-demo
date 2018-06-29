import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CustomerStorageService} from '../services/customer-storage.service';
import {Customer} from '../models/Customer';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CustomerLocalStorageService implements CustomerStorageService {
  private static customers: Customer[] = [];
  private static customersLoaded: boolean = false;

  private static nextCustomerId(): number {
    return Math.floor(Math.random() * new Date().getTime() / (1024 ** 2));
  }

  private static customerFromObject(objToConvert): Customer {
    let customer: Customer;
    if (typeof objToConvert === 'object') {
      customer = Object.assign(new Customer(), objToConvert);
    }
    try {
      /**
       * We need to fix up properties that were loaded as string but need to be binary.
       *
       * The two we may need to fix are customerId and birthDate.
       *
       * Generically, if you want to view the actual type, this seems to be the
       * most reliable way:
       *
       *  Object.prototype.toString.call(someObject);
       */

        // if customerId were loaded as a string convert
      const customerId = objToConvert.customerId || objToConvert._customerId;
      if (Object.prototype.toString.call(customerId) === '[object String]') {
        customer.customerId = parseInt(customerId, 10);
      }

      /**
       * birthDate is stored as a string in ISO 8601 format.  Parse it.  Date.parse()
       * returns a Number in milliseconds, so use that to create the Date object.
       */
      const birthDate = objToConvert.birthDate || objToConvert._birthDate;
      if (Object.prototype.toString.call(birthDate) === '[object String]') { // stored as yyyy-MM-dd or yyyy-MM-ddT... (w/ time & timezone)
        customer.birthDate = new Date(Date.parse(birthDate));
      }
    }
    catch (e) {
      console.log('Can\'t convert either customerId or birthDate string for ' + customer.fullName + ': ' + e);
    }
    return customer;
  }

  private static loadFromLocalStorage() {
    const localCustomers = JSON.parse(window.localStorage.getItem('customers'));
    for (let cust of localCustomers) {
      CustomerLocalStorageService.customers.push(CustomerLocalStorageService.customerFromObject(cust));
    }
    CustomerLocalStorageService.customersLoaded = true;
    console.log('Loaded Customers:');
    console.log(CustomerLocalStorageService.customers);
  }

  private static saveToLocalStorage() {
    console.log('Saving as:');
    console.log(JSON.stringify(CustomerLocalStorageService.customers));
    window.localStorage.setItem('customers', JSON.stringify(CustomerLocalStorageService.customers));
    console.log('Saving Customers:');
    console.log(CustomerLocalStorageService.customers);
  }

  constructor() {
    if (!CustomerLocalStorageService.customersLoaded) {
      CustomerLocalStorageService.loadFromLocalStorage();
    }
  }

  insert(customer: Customer): Observable<Customer> {
    customer.customerId = CustomerLocalStorageService.nextCustomerId();
    CustomerLocalStorageService.customers.push(customer);
    CustomerLocalStorageService.saveToLocalStorage();
    return of(customer);
  }

  remove(customer: Customer): Observable<Customer> {
    CustomerLocalStorageService.customers.forEach((cust, idx) => {
      if (cust.customerId === customer.customerId) {
        CustomerLocalStorageService.customers.splice(idx, 1);
        return of(cust);
      }
    });
    return of(null);
  }

  update(customer: Customer): Observable<Customer> {
    CustomerLocalStorageService.customers.forEach(cust => {
      if (cust.customerId === customer.customerId) {
        cust = customer;
        return of(cust);
      }
    });
    return of(null);
  }

  findById(customerId: number): Observable<Customer> {
    CustomerLocalStorageService.customers.forEach(cust => {
      if (cust.customerId === customerId) {
        return of(cust);
      }
    });
    return of(null);
  }

  findAll(): Observable<Customer[]> {
    return of(CustomerLocalStorageService.customers);
  }

  findByLastName(lastName: String): Observable<Customer[]> {
    const customers: Customer[] = [];
    CustomerLocalStorageService.customers.forEach(cust => {
      if (cust.lastName === lastName) {
        customers.push(cust);
      }
    });
    return of(customers);
  }


}
