import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
    country: new FormControl('by'),
    answer: new FormControl('yes'),
  });

  onSubmit() {
    console.log('submited!', this.form);
  }

}
