import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './admin/mainpage/mainpage.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { VehiclesComponent } from './admin/vehicles/vehicles.component';
import { AddVehiclesComponent } from './admin/add-vehicles/add-vehicles.component';
import { AppointmentsComponent } from './admin/appointments/appointments.component';
import { AddAppointmentsComponent } from './admin/add-appointments/add-appointments.component';
import { WorkOrdersComponent } from './admin/work-orders/work-orders.component';
import { AddWorkOrderComponent } from './admin/add-work-order/add-work-order.component';

const routes: Routes = [
  {
    path: "anasayfa",
    component: MainpageComponent,
  },
  {
    path: "musteriler",
    component: CustomersComponent,
  },
  {
    path: "musteri-ekle",
    component: AddCustomerComponent,
  },
  {
    path: "araclar",
    component: VehiclesComponent,
  },
  {
    path: "arac-ekle",
    component: AddVehiclesComponent,
  },
  {
    path: "randevular",
    component: AppointmentsComponent,
  },
  {
    path: "randevu-ekle",
    component: AddAppointmentsComponent,
  },
  {
    path: "is-emirleri",
    component: WorkOrdersComponent,
  },
  {
    path: "is-emri-olustur",
    component: AddWorkOrderComponent,
  },
  { path: "", redirectTo: "/anasayfa", pathMatch: "full" },
  { path: "**", redirectTo: "/anasayfa", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
