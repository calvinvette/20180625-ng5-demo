import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {Customer} from '../models/Customer';
import {Address} from '../models/Address';
import {NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';
import {MyDateAdapter} from './MyDateAdapter';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CustomerStorageService, CustomerStorageServiceImpl} from '../services/customer-storage.service';

@Component({
  selector: 'tt-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css'],
  providers: [{
    provide: NgbDateAdapter,
    useClass: MyDateAdapter
  }]
})
export class CustomerViewComponent implements OnInit {

  private _customer: Customer = new Customer();

  private _customerId: number = -1;

  private _state: string = 'view';

  private _customerForm: FormGroup;

  // private static customers: { [key: string]: Customer; } = {
  //   '1234': new Customer(1234, 'Harry', 'James', 'Potter', 'harry.potter@hogwarts.ac.uk', '+44 0206-931-9185'),
  //   '1235': new Customer(1235, 'Ron', 'Bilius', 'Weasley', 'ron.weasley@hogwarts.ac.uk', '+44 0206-931-9181'),
  //   '1236': new Customer(1236, 'Hermione', 'Jean', 'Granger', 'hermoine.granger@hogwarts.ac.uk', '+44 0206-931-9182')
  // };
  //
  //
  // public static getAllCustomers(): Customer[] {
  //   let custArray : Customer[] = [];
  //   Object.keys(CustomerViewComponent.customers).forEach(key => custArray.push(CustomerViewComponent.customers[key]));
  //   return custArray;
  // }
  //
  // public static getCustomerByID(id: number) : Customer {
  //   if (id) {
  //     return CustomerViewComponent.customers[id.toString()];
  //   } else {
  //     return null;
  //   }
  // }

  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute,
              private customerStorageService: CustomerStorageServiceImpl) {
    this.router.params.subscribe(params => {
      this.customerId = params['customerId'];
    });
    // this.customer = new Customer(1234, "XXX", "YYY", "xxx.yy@hogwarts.ac.uk", "+44 0206-931-9185");
    //  this.customer = CustomerViewComponent.customers[this.customerId];
    //for (let custKey CustomerViewComponent.getAllCustomers()) {
    // CustomerViewComponent.getCustomerByID(parseInt(custKey, 10)).homeAddress = new Address(
    //   -1,
    //   "#4 Privet Drive",
    //   "Cupboard under the stair",
    //   "(no line 3)",
    //   "Little Whinging",
    //   "Surrey",
    //   "United Kingdom",
    //   "EN314591"
    // );
    // CustomerViewComponent.getCustomerByID(parseInt(custKey, 10)).workAddress = new Address(
    //   -1,
    //   "#1234 Work",
    //   "(no line 2)",
    //   "(no line 3)",
    //   "Little Whinging",
    //   "Surrey",
    //   "United Kingdom",
    //   "EN314591"
    // );
    //   console.log(parseInt(custKey, 10));
    // }
  }

  // Post-constructor call
  ngOnInit() {
    this.customerStorageService.findById(this.customerId).subscribe(found => {
      this.customer = found;
      this.resetForm();
    });
    // console.log("FormBuilder: ");
    // console.log(this.formBuilder);
  }

  resetForm() {
    if (this.customer) {
      this._customerForm = this.formBuilder.group({
        firstName: new FormControl(this.customer.firstName, [Validators.required, Validators.minLength(2), Validators.maxLength(25), Validators.pattern('[A-Za-z\\\'\\- 0-9]*')]),
        lastName: new FormControl(this.customer.lastName, [Validators.required, Validators.minLength(2), Validators.maxLength(25), Validators.pattern('[A-Za-z\\\'\\- 0-9]*')]),
        phoneNumber: new FormControl(this.customer.phoneNumber, [Validators.pattern('[+\\- 0-9]*')]),
        email: new FormControl(this.customer.email, [Validators.required, Validators.minLength(6), Validators.maxLength(128), Validators.email]),
        birthDate: new FormControl(this.customer.birthDate)
      });
    }
  }

  onClick($event) {
    //console.log(this.customer.firstName + " was clicked.");
  }

  onHover($event) {
    // console.log(this.customer.firstName + " is being hovered over.");
  }

  onMouseOut($event) {
    // console.log("Left: " + this.customer.firstName + ": ");
    // console.log($event);
  }

  onDoubleClick($event) {
    console.log('Double-Clicked: ' + this.customer.firstName + ': ');
    console.log($event);
  }

  private extractCustomerFromForm() {
    this.customer.firstName = this.customerForm.get('firstName').value;
    this.customer.lastName = this.customerForm.get('lastName').value;
    this.customer.phoneNumber = this.customerForm.get('phoneNumber').value;
    this.customer.email = this.customerForm.get('email').value;
    this.customer.birthDate = this.customerForm.get('birthDate').value;
  }

  // "Design Patterns: Elements of OO Reusable Software"
  // Gang of Four (GoF) Template pattern
  private processForm(action: () => void) {
    if (this.customerForm.valid) {
      this.extractCustomerFromForm();
      action();
      // housekeeping; cleanup; tx commit/rollback; connection closing
    }
  }

  public customerUpdatedEventSource: EventEmitter<Customer> = new EventEmitter<Customer>();
  public customerAddedEventSource: EventEmitter<Customer> = new EventEmitter<Customer>();

  private update() {
    this.processForm(() => {

      this.customerStorageService.update(this.customer).subscribe(customerUpdated => {
        this.customer = customerUpdated;
        // this.state = 'view'; // we'll need this when we handle fail scenarios
        this.customerUpdatedEventSource.emit(this.customer);
        this.state = 'view';
      });

    });
  }

  private add() {
    this.processForm(() => {

      this.customerStorageService.insert(this.customer).subscribe(customer => {
        this.customer = customer;
        // this.state = 'view'; // we'll need this when we handle fail scenarios
        this.customerAddedEventSource.emit(this.customer);
        this.state = 'view';
      });

    });
  }

  private submit() {
    if (this.state === 'edit') {
      this.update();
    }
    else if (this.state === 'add') {
      this.add();
    }
    else {
      console.log('Invalid state: ' + this.state);
    }
  }


  // update() {
  //   if (this.customerForm.valid) {
  //     this.customer.firstName = this.customerForm.get('firstName').value;
  //     this.customer.lastName = this.customerForm.get('lastName').value;
  //     this.customer.phoneNumber = this.customerForm.get('phoneNumber').value;
  //     this.customer.email = this.customerForm.get('email').value;
  //     this.customer.birthDate = this.customerForm.get("birthDate").value;
  //
  //     this.state = 'view';
  //   }
  // }

  ageInYears(): number {
    return Math.floor(this.customer.age);
  }

// In this version, bdChange just invokes the static method above
  bdChange(src, val) {
    this.customer.birthDate = MyDateAdapter.ngbToDate(val);
    console.log(this.customer.birthDate);
    return '1900-04-01';
  }

  get customer(): Customer {
    return this._customer;
  }

  @Input()
  set customer(value: Customer) {
    this._customer = value;
  }

  get customerId(): number {
    return this._customerId;
  }

  @Input()
  set customerId(value: number) {
    console.log('Applied in setter: ' + value);
    this._customerId = value;
  }

  get state(): string {
    return this._state;
  }

  @Input()
  set state(value: string) {
    this._state = value;
  }


  get customerForm(): FormGroup {
    return this._customerForm;
  }

  set customerForm(value: FormGroup) {
    this._customerForm = value;
  }
}
