import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Vehicle , VehicleWithId } from '../models/vehicle';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  serviceBaseUrl = `${environment.apiUrl}/vehicle`;
  constructor(private http: HttpClient) { }

  createVehicle(data: Vehicle): Observable<VehicleWithId> {
    return this.http.post<VehicleWithId>(this.serviceBaseUrl, data)
  }
  getVehicle(): Observable<VehicleWithId[]> {
    return this.http.get<VehicleWithId[]>(this.serviceBaseUrl)
  }
  getVehicleByUserId(data : any): Observable<VehicleWithId[]> {
    return this.http.get<VehicleWithId[]>(this.serviceBaseUrl + "?userId="+ data)
  }

}
