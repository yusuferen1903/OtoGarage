import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { VehicleWithId } from 'src/app/models/vehicle';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles : VehicleWithId[] = []
  constructor(
    private vehicleService : VehicleService,
  ) { }

  ngOnInit(): void {
    this.getVehicles()
  }
  getVehicles(){
    this.vehicleService.getVehicle().subscribe(response => {
      this.vehicles = response
      
    })
  }
}
