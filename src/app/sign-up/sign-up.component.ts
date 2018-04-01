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
            birth: new FormControl('',  Validators.required),
        });
    }

    onSubmit(): void {
        console.log('sign up');
    }

    public isValidBirth() {
        // const today = new Date().getFullYear();
    }

    public resetForm() {
        this.signUpForm.reset();
    }
}
