import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(700, style({ opacity: 1 })),
      ]),
      transition(':leave', [animate(300, style({ height: 0, opacity: 0 }))]),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  uris = false;
  uri!: SafeUrl;
  appointments = false;
  workOrder = false;
  customer = false;
  vehicles = false;
  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.uri = this.domSanitizer.bypassSecurityTrustUrl(
      'assets/oto-garage.jpg'
    );
  }
  toggleMenuItem(item: string): void {
    switch (item) {
      case 'customer':
        this.customer = !this.customer;
        this.appointments = false;
        this.workOrder = false;
        this.vehicles = false;
        break;
      case 'vehicles':
        this.vehicles = !this.vehicles;
        this.appointments = false;
        this.workOrder = false;
        this.customer = false;
        break;
      case 'appointments':
        this.appointments = !this.appointments;
        this.workOrder = false;
        this.customer = false;
        this.vehicles = false;
        break;
      case 'workOrder':
        this.workOrder = !this.workOrder;
        this.appointments = false;
        this.customer = false;
        this.vehicles = false;
        break;
      default:
        break;
    }
  }

  public sidebarShow: boolean = true;
}
