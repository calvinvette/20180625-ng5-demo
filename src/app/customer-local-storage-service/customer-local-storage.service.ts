import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CustomerStorageService} from '../customer-storage.service';
import {Customer} from '../models/Customer';

@Injectable()
export class CustomerLocalStorageService implements CustomerStorageService {

  constructor() { }

  insert(customer: Customer): Observable<Customer> {
    return null;
  }

  remove(customer: Customer): Observable<Customer> {
    return null;
  }

  update(customer: Customer): Observable<Customer> {
    return null;
  }

  findById(customerId: number): Observable<Customer> {
    return null;
  }

  findAll(): Observable<Customer[]> {
    return null;
  }

  findByLastName(lastName: String): Observable<Customer[]> {
    return null;
  }

}
