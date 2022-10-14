import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Customer, CustomerWithId } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  serviceBaseUrl = `${environment.apiUrl}/customer`;
  constructor(private http: HttpClient) {

  }
  
  createCustomer(data: Customer): Observable<CustomerWithId> {
    return this.http.post<CustomerWithId>(this.serviceBaseUrl, data)
  }
  getCustomer(): Observable<CustomerWithId[]> {
    return this.http.get<CustomerWithId[]>(this.serviceBaseUrl)
  }
  getCustomerByGsm(data : any): Observable<CustomerWithId[]> {
    return this.http.get<CustomerWithId[]>(this.serviceBaseUrl + "?gsm="+ data)
  }

}
