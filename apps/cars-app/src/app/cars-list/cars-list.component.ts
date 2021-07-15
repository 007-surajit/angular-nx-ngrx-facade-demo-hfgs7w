import { Component, OnInit } from '@angular/core';

// Relative paths are needed here until StackBlitz supports mono-repos
import { CarsFacade } from '../../../../../libs/cars/state/src';

@Component({
  selector: 'myproj-cars-list',
  template: `
    <ul>
      <li *ngFor="let car of (cars$ | async)">
        {{ car.year }} {{ car.brand }} {{ car.model }}
      </li>
    </ul>
  `
})
export class CarsListComponent {
  cars$ = this.carService.allCars$;

  constructor(private carService: CarsFacade) {
    this.carService.loadAll();
  }
}
