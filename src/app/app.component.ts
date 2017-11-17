import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
    user: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email], [this.checkForEmail]),
      pass: new FormControl('', [Validators.required, this.checkForPassLength.bind(this)]),
    }),
    country: new FormControl('by'),
    answer: new FormControl('yes'),
  });

  minPassLength = 3;

  onSubmit() {
    console.log('submited!', this.form);
  }

  isEmailInvalid(): boolean {
    const email = this.form.get('user.email');
    return email.invalid && email.touched;
  }

  isEmailUsed(): boolean {
    const user = this.form.get('user.email');
    if (user.errors !== null && user.errors.hasOwnProperty('emailIsUsed')) {
      return user.errors['emailIsUsed'];
    } else {
      return false;
    }
  }

  isPassInvalid(): boolean {
    const pass = this.form.get('user.pass');
    return pass.invalid && pass.touched;
  }

  // должен возвращать:
  // - либо ничего null или undefined
  // - либо объект {'errorCode': true}
  checkForPassLength(pass: FormControl) {

    let result = null;

    if (pass.value.length < this.minPassLength) {
      result = {'lengthError': true};
    }
    return result;
  }

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve) => {

      setTimeout(() => {

        if (control.value === 'x@x') {
          resolve({'emailIsUsed': true});
        } else {
          resolve(null);
        }

      }, 3000);

    });
  }

}
