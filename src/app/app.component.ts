import {Component} from '@angular/core';
import {CarsService} from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private carsService: CarsService) {
  }

  get cars() {
    return this.carsService.cars;
  }
}
