import { Component, OnInit } from '@angular/core';
import { AppointmentWithId } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  appointment : AppointmentWithId[] = []
  constructor(
    private appointmentService : AppointmentService,
  ) { }

  ngOnInit(): void {
    this.getAppointment()
  }

  getAppointment(){
    this.appointmentService.getAppointment().subscribe(resp => {
      this.appointment = resp
      
    } ,
    err => {
      alert("Bir Hata Meydana Geldi" + err)
    })
  }
  changeAppointmentStatus(id : any){
    this.appointmentService.updateAppointment(id).subscribe(resp => {
      this.getAppointment()
      
    },
    err =>{
      alert ("Bir hata meydana geldi" + err)
    } )
  }

}
