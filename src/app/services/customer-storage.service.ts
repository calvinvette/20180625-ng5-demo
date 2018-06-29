import {Observable} from 'rxjs/Observable';
import {Customer} from '../models/Customer';
import {Injectable} from '@angular/core';
import { of } from 'rxjs/observable/of';

export interface CustomerStorageService {
  insert(customer: Customer): Observable<Customer>;

  remove(customer: Customer): Observable<Customer>;

  update(customer: Customer): Observable<Customer>;

  findById(customerId: number): Observable<Customer>;

  findAll(): Observable<Customer[]>;

  findByLastName(lastName: String): Observable<Customer[]>;
}

@Injectable()
export class CustomerStorageServiceImpl implements CustomerStorageService {
  findAll(): Observable<Customer[]> {
    return of([]);
  }

  findById(customerId: number): Observable<Customer> {
    return of(null);
  }

  findByLastName(lastName: String): Observable<Customer[]> {
    return of([]);
  }

  insert(customer: Customer): Observable<Customer> {
    return of(customer);
  }

  remove(customer: Customer): Observable<Customer> {
    return of(customer);
  }

  update(customer: Customer): Observable<Customer> {
    return of(customer);
  }

}
