import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {
  serviceBaseUrl = `${environment.apiUrl}/workOrder`;
  constructor(private http: HttpClient) { }

  createWorkOrder(appiontmentsInfo:any ,user : any , vehicle: any ): Observable<any> {
    return this.http.post<any>(this.serviceBaseUrl, {appiontmentsInfo ,user , vehicle})
  }
  getWorkOrder(): Observable<any[]> {
    return this.http.get<any[]>(this.serviceBaseUrl)
  }
}
