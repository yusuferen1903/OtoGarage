import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { CustomerWithId } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { VehicleService } from 'src/app/services/vehicle.service';
@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.component.html',
  styleUrls: ['./add-vehicles.component.scss']
})
export class AddVehiclesComponent implements OnInit {

  vehicleForm!: FormGroup;
  vehicleOwner! : FormGroup;
  gsmControl = false
  userInfo : CustomerWithId[] = []
  constructor(
    private customerService : CustomerService,
    private vehicleService : VehicleService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.vehicleForm = new FormGroup({
      plate: new FormControl("", Validators.required),
      brand: new FormControl("", Validators.required),
      carModel: new FormControl("", Validators.required),
      modelYear: new FormControl("", Validators.required),
    })
    this.vehicleOwner = new FormGroup ({
      ownerGsm: new FormControl("", Validators.required)
    })
  }
  onFormOwnerSubmit(){
    if (!this.vehicleOwner?.valid) {
      this.vehicleOwner?.markAllAsTouched();
      alert(
        "Formu eksik ya da hatalı doldurdunuz. Bilgilerinizi kontrol edip, tekrar deneyiniz."
      );
      window.scroll(0, 200);
      return;
    }
      const ownerGsm = this.vehicleOwner?.value.ownerGsm
    this.customerService.getCustomerByGsm(ownerGsm).subscribe(resp => {
      if (resp.length > 0) {
        this.userInfo = resp 
        this.gsmControl = true
        
      }else {
        alert("Kullanıcı Mevcut Değil")
        
      }
    })
 
    
  }
  onFormSubmit(){
    // this.findInvalidControls();
    if (!this.vehicleForm?.valid) {
      this.vehicleForm?.markAllAsTouched();
      alert(
        "Formu eksik ya da hatalı doldurdunuz. Bilgilerinizi kontrol edip, tekrar deneyiniz."
      );
      window.scroll(0, 200);
      return;
    }
    let data = {
      plate: this.vehicleForm?.value.plate,
      brand: this.vehicleForm?.value.brand,
      carModel: this.vehicleForm?.value.carModel,
      modelYear: this.vehicleForm?.value.modelYear,
      userId: this.userInfo[0].id
    }
    this.vehicleService.createVehicle(data).subscribe(resp => {
      alert("Araç Eklendi")
    })
  }

  get name() {
    return this.vehicleForm?.get("plate");
  }
  get surname() {
    return this.vehicleForm?.get("brand");
  }
  get mail() {
    return this.vehicleForm?.get("carModel");
  }
  get gsm() {
    return this.vehicleForm?.get("modelYear");
  }
  get ownerGsm() {
    return this.vehicleOwner?.get("ownerGsm");
  }
}
