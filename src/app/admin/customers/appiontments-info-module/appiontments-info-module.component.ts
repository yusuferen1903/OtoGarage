import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentService } from 'src/app/services/appointment.service';
@Component({
  selector: 'app-appiontments-info-module',
  templateUrl: './appiontments-info-module.component.html',
  styleUrls: ['./appiontments-info-module.component.scss']
})
export class AppiontmentsInfoModuleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppiontmentsInfoModuleComponent>,
    private appointmentService : AppointmentService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }
    appiontmentsDate : string = '';
    appiontmentsTime : number = 0;
  ngOnInit(): void {
    this.getPaymentDate()
  }
  public close(value : any) {
    this.dialogRef.close(value);
  }
  format(inputDate : any) {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
        // Months use 0 index.
        return date.getDate() + '/' + (date.getMonth()+ 1)   + '/' + date.getFullYear();
    }
    return null;
  }
  
  getPaymentDate(){
    var today = new Date();
    this.appiontmentsDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
}
submit (){
  let data = {
    appiontmentsDate : this.appiontmentsDate,
    appiontmentsTime : this.appiontmentsTime,
  }
  const apporvedAppiontment = false
  this.appointmentService.createAppointment(data , this.data.user , this.data.vehicle , apporvedAppiontment).subscribe(response => {
    this.close(true);
  }
  )

  
}
  cancel() {
    this.dialogRef.close({ response: null });
    this.close(false);
  }
}
