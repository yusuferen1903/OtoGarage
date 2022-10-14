import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { CustomerService } from 'src/app/services/customer.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  appiontmentCount : number = 0
  customerCount : number = 0
  vehicleCount : number = 0
  workOrderCount : number = 0
  constructor(
    private appiontmentService : AppointmentService,
    private customerService : CustomerService,
    private vehicleService : VehicleService,
  ) { }

  ngOnInit(): void {
    this.getCountWorkOrder()
    this.getCountAppiontment()
    this.getCountCustomer()
    this.getCountVehicle()
  }

  getCountWorkOrder(){
    this.appiontmentService.getWorkOrderCount().subscribe(resp => {
      this.workOrderCount = resp.length
    })
  }
  getCountAppiontment(){
    this.appiontmentService.getAppointmentCount().subscribe(resp => {
      this.appiontmentCount = resp.length
    })
  }

  getCountCustomer(){
    this.customerService.getCustomer().subscribe(resp=> {
      this.customerCount = resp.length
    })
  }

  getCountVehicle(){
    this.vehicleService.getVehicle().subscribe(resp => {
      this.vehicleCount = resp.length
    })
  }
}
