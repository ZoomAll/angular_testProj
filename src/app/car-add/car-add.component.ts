import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent{

  @Output() onCarAdd = new EventEmitter<String>();
  carName = '';

  addCar() {
    this.onCarAdd.emit(this.carName);
    this.carName = '';
  }

}
