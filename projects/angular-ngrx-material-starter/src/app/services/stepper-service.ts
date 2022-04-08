import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  private stepOneSource: Subject<FormGroup> = new Subject();
  stepOne: Observable<FormGroup> = this.stepOneSource.asObservable();

  private stepTwoSource: Subject<FormGroup> = new Subject();
  stepTwo: Observable<FormGroup> = this.stepTwoSource.asObservable();

  mainForm: FormGroup = this._formBuilder.group({
    firstName: '',
    lastName: '',
    extraName: '',
    address: ''
  });

  constructor(private _formBuilder: FormBuilder) {
    this.stepOne.subscribe((form) =>
      form.valueChanges.subscribe((val) => {
        this.mainForm.value.firstName = val.firstName;
        this.mainForm.value.lastName = val.lastName;
        this.mainForm.value.extraName = val.extraName;
      })
    );
    this.stepTwo.subscribe((form) =>
      form.valueChanges.subscribe((val) => {
        // console.log(val)
        this.mainForm.value.address = val.address;
      })
    );
  }

  stepReady(form: FormGroup, part: any) {
    if (part === 'one') {
      this.stepOneSource.next(form);
    } else if (part === 'two') {
      this.stepTwoSource.next(form);
    }
  }
}
