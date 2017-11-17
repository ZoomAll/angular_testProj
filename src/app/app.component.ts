import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ru';

  formData = {};
  isSubmited = false;

  @ViewChild('myLoginForm') form: NgForm;

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset();
    console.log(this.form);
  }

  addRandEmail() {
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: 'rand@email.com',
    //   },
    //   country: '',
    //   answer: '',
    // });

    this.form.form.patchValue({
      user: {email: 'rand@email.com'}
    });

  }
}
