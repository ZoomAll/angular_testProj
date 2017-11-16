import {Component, EventEmitter, Output} from '@angular/core';
import {CarsService} from '../cars.service';
import {ConsoleService} from '../console.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent {

  carName = '';

  constructor(private carsService: CarsService, private logger: ConsoleService) {
  }

  addCar() {
    this.carsService.addCar(this.carName);
    this.carName = '';
    this.logger.log('carADD');
  }
}
