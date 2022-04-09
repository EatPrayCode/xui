import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from '../../../../services/app.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  errorMessage = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private ref: MatDialogRef<SigninComponent>,
    public appService: AppService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [
        'test@test.com',
        Validators.compose([Validators.required, Validators.email])
      ],
      password: ['testpassword', Validators.compose([Validators.required])]
    });
  }

  signInAnonymously() {
    this.appService.signInAnonymously().then((result) => {
      this.appService.getAppUserSettings().subscribe(res=>{
      });
      this.closeAuthDialog(result);
    });
  }

  signInWithGoogle() {
    this.appService.signInWithGoogle().then((result: any) => {
      this.appService.getAppUserSettings().subscribe(res=>{
      });
      this.closeAuthDialog(result);
    });
  }

  closeAuthDialog(user: any) {
    this.ref.close(user);
    console.log('\Closed auth dialog...');
  }
}
