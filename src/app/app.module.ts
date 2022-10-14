import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './admin/appointments/appointments.component';
import { MainpageComponent } from './admin/mainpage/mainpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './header/header.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { VehiclesComponent } from './admin/vehicles/vehicles.component';
import { AddVehiclesComponent } from './admin/add-vehicles/add-vehicles.component';
import { AddAppointmentsComponent } from './admin/add-appointments/add-appointments.component';
import { WorkOrdersComponent } from './admin/work-orders/work-orders.component';
import { AddWorkOrderComponent } from './admin/add-work-order/add-work-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppiontmentsInfoModuleComponent } from './admin/customers/appiontments-info-module/appiontments-info-module.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    MainpageComponent,
    SidebarComponent,
    HeaderComponent,
    CustomersComponent,
    AddCustomerComponent,
    VehiclesComponent,
    AddVehiclesComponent,
    AddAppointmentsComponent,
    WorkOrdersComponent,
    AddWorkOrderComponent,
    AppiontmentsInfoModuleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
