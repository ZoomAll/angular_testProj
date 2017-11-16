import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
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

  addCarToList(carName: string) {
    this.cars.push({
      name: carName,
      isSold: false
    });
  }
}
