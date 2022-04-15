import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    
    @Output() submitChange: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        const valMock: any = new Date().toLocaleTimeString().replace(/\s/g, '');
        const username: any = valMock;
        const email: any = `test${valMock.replaceAll(':', '')}@gmail.com`;
        const password: any = valMock;

        this.registerForm = this.formBuilder.group({
            firstName: ['testtest', Validators.required],
            lastName: ['testtest', Validators.required],
            email: [email, Validators.required],
            username: [username, Validators.required],
            password: [password, [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        console.log(this.registerForm.value);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.submitChange.emit(this.registerForm.value);
    }
}
