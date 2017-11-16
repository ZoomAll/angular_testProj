import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CarsService {
  cars = [
    {
      name: 'Ford',
      isSold: false
    },
    {
      name: 'Mazda',
      isSold: true
    },
    {
      name: 'Mercedes',
      isSold: false
    }
  ];

  constructor(private consoleService: ConsoleService) {
  }

  addCar(name: string) {
    this.cars.push({
      name: name,
      isSold: false
    });

    this.consoleService.log(`${name} added`);
  }
}
