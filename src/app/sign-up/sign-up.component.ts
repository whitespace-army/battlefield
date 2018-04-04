import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

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
      birth: new FormControl('', [Validators.required, this._validateBirth.bind(this)]),
    });
  }

  private _validateBirth(input: FormControl) {
    const date = input.value;
    const now = new Date();
    const fourteenYearsAgoDate = new Date(now);
    const nowInMilliseconds = now.getTime();
    fourteenYearsAgoDate.setFullYear(now.getFullYear() - 14);

    if (nowInMilliseconds - new Date(date).getTime() < nowInMilliseconds - fourteenYearsAgoDate.getTime()) {
      return { isValidBirth: true };
    }
  }

  onSubmit(): void {
    console.log('sign up');
  }

  public resetForm() {
    this.signUpForm.reset();
  }
}

