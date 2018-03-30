import {Component} from '@angular/core';
import {FormGroup, FormControl, EmailValidator, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.styl']
})

export class SignUpComponent {
  // matcher = new MyErrorStateMatcher();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public signUpForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.minLength(4), Validators.required]),
    password: new FormControl('', [Validators.minLength(4), Validators.required]),
    email: new FormControl('', Validators.required),
    fio: new FormControl('', [Validators.maxLength(250), Validators.required]),
  });

  public resetForm() {
    this.signUpForm.reset();
  }

  // export class MyErrorStateMatcher implements ErrorStateMatcher {
  // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  //   const isSubmitted = form && form.submitted;
  //   return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  // }

  // myFilter = (d: Date): any => {
  //   const year = d.getFullYear();
  //   console.log(year)
  // return year !== 0 && day !== 4;
  // }
}
