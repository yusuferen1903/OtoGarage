import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customerForm!: FormGroup;
  constructor(
    private customerService : CustomerService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.customerForm = new FormGroup({
      name: new FormControl("", Validators.required),
      surname: new FormControl("", Validators.required),
      mail: new FormControl("", Validators.required),
      gsm: new FormControl("", Validators.required),
    })
  }
  onFormSubmit(){
    if (!this.customerForm?.valid) {
      this.customerForm?.markAllAsTouched();
      alert(
        "Formu eksik ya da hatalı doldurdunuz. Bilgilerinizi kontrol edip, tekrar deneyiniz."
      );
      window.scroll(0, 200);
      return;
    }
    let data: Customer = {
      name: this.customerForm?.value.name,
      surname: this.customerForm?.value.surname,
      mail: this.customerForm?.value.mail,
      gsm: this.customerForm?.value.gsm,
    }
    this.customerService.createCustomer(data).subscribe(resp => {
      alert("Müşteri Eklendi")
    })

  }

  get name() {
    return this.customerForm?.get("name");
  }
  get surname() {
    return this.customerForm?.get("surname");
  }
  get mail() {
    return this.customerForm?.get("mail");
  }
  get gsm() {
    return this.customerForm?.get("gsm");
  }
}
