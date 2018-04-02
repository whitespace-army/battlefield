import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.styl']
})

export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  maxDate = new Date;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      login: new FormControl('', [Validators.minLength(4), Validators.required]),
      password: new FormControl('', [Validators.minLength(4), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      fio: new FormControl('', Validators.maxLength(250)),
      birth: new FormControl('', [Validators.required]),
    });

    // function validateBirth(input: FormControl) {
    //   const hasExclamation = input.value.indexOf('!') >= 0;
    //   console.log(hasExclamation);
    //   return hasExclamation ? null : { needsExclamation: true };
    // }

    // export function ValidateUrl(control: AbstractControl) {
    //   if (!control.value.startsWith('https') || !control.value.includes('.io')) {
    //     return { validUrl: true };
    //   }
    //   return null;
    // }

    // function validateBirth(input: FormControl) {
        // const chosenDate = event.value.getFullYear();

        // if (year - chosenDate < 5) {
        //   console.log('dscdcd')
        // }

        // return input.value.indexOf(year) >= 0 ?
        //   null :
        //   { [errorType]: true };
    // }
  }

  onSubmit(): void {
    console.log('sign up');
  }

  isValidBirth(event: MatDatepickerInputEvent<Date>) {
    const chosenDate = event.value.getFullYear();
    const nowYear = new Date().getFullYear();
    if (nowYear - chosenDate < 14) {
      console.log('ты еще маленький, чтобы жрать бургеры');
    }
  }

  public resetForm() {
    this.signUpForm.reset();
  }
}

