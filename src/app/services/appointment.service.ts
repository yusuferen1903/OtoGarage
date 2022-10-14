import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Appointment, AppointmentWithId } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  serviceBaseUrl = `${environment.apiUrl}/appointment`;
  constructor(private http: HttpClient) { }

  createAppointment(appiontmentsInfo: any, user : any , vehicle:any , apporvedAppiontment:boolean): Observable<any> {
    return this.http.post<any>(this.serviceBaseUrl, {appiontmentsInfo,user,vehicle , apporvedAppiontment})
  }
  getAppointment(): Observable<AppointmentWithId[]> {
    return this.http.get<AppointmentWithId[]>(this.serviceBaseUrl)
  }

  updateAppointment(id : any): Observable<AppointmentWithId[]> {
    return this.http.patch<AppointmentWithId[]>(this.serviceBaseUrl+ "/" +id , {apporvedAppiontment : true})
  }

  getWorkOrderCount(): Observable<AppointmentWithId[]> {
    return this.http.get<AppointmentWithId[]>(this.serviceBaseUrl + "?apporvedAppiontment=true")
  }
  getAppointmentCount(): Observable<AppointmentWithId[]> {
    return this.http.get<AppointmentWithId[]>(this.serviceBaseUrl + "?apporvedAppiontment=false")
  }
}
