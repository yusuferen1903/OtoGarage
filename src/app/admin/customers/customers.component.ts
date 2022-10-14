import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { VehicleService } from 'src/app/services/vehicle.service';
import { CustomerWithId } from 'src/app/models/customer';
import { VehicleWithId } from 'src/app/models/vehicle';
import { MatDialog } from '@angular/material/dialog';
import { AppiontmentsInfoModuleComponent } from './appiontments-info-module/appiontments-info-module.component';
import { WorkOrderService } from 'src/app/services/work-order.service';
import { AppointmentService } from 'src/app/services/appointment.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  users : CustomerWithId[] = []
  userVehicles : VehicleWithId[] = []
  constructor(
    private customerService : CustomerService,
    private vehicleService : VehicleService,
    private dialog: MatDialog,
    private appointmentService : AppointmentService,
  ) { }

  ngOnInit(): void {
    this.getCustomer()
  }
  getCustomer(){
    this.customerService.getCustomer().subscribe(resp => {
      this.users = resp 
      
    })
  }
  getCustomerVehicles(userId: number){
    this.vehicleService.getVehicleByUserId(userId).subscribe(response => {
      this.userVehicles = response
      
    })
  }
  createAppointment(user : any , vehicle: any) {
    const dialogRef = this.dialog.open(AppiontmentsInfoModuleComponent, {
      width: '600px',
      data: {user , vehicle}
    });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          alert("Randevu Oluşturuldu")
        }

    })
  }

  createWorkOrder (user : any , vehicle: any) {

    let data = {
      appiontmentsDate : "",
      appiontmentsTime : "",
    }
    const apporvedAppiontment = true
    this.appointmentService.createAppointment(data , user , vehicle , apporvedAppiontment).subscribe(response => {
        alert ("İş Emri Oluşturuldu")
    }
    )
  }

}
