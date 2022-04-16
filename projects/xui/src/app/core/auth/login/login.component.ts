import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    @Output() submitChange: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['yogifromhills@gmail.com', Validators.required],
            password: ['Ashu@7569', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.submitChange.emit(this.loginForm.value);
    }
}
