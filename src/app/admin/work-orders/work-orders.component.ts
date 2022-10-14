import { Component, OnInit } from '@angular/core';
import { AppointmentWithId } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.scss']
})
export class WorkOrdersComponent implements OnInit {
  appointment : AppointmentWithId[] = []
  
  constructor(private appointmentService : AppointmentService,) { }

  ngOnInit(): void {
    this.getAppointment()
  }
  getAppointment(){
    this.appointmentService.getAppointment().subscribe(resp => {
      this.appointment = resp
    })
  }
}
