import { appStateFirebaseSample } from './../../../../models/app.state';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core.module';
import { appState as appSettingsState, appStateFirebaseNull } from '../../../../models/app.state';
import { DataService } from '../../../../services/data.service';
import { StateService } from '../../../../services/state.service';

@Component({
  selector: 'app-choose-app-settings-modal',
  templateUrl: './choose-app-settings-modal.component.html',
  styleUrls: ['./choose-app-settings-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChooseAppSettingsModalComponent implements OnInit {
  userSettingsForm: FormGroup = new FormGroup({});
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  public lat: any = '';
  public lng: any = '';
  customerTypes: any = [
    {
      name: 'B2B',
      value: 'B2B'
    },
    {
      name: 'B2C',
      value: 'B2C'
    }
  ];

  netasList: any = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    public stateService: StateService
  ) {}

  ngOnInit() {
    this.userSettingsForm = this.formBuilder.group({
      country: [''],
      pinCode: [''],
      countries: [''],
      customerType: ['']
    });
    // this.dataService.loadCountries({}).subscribe(res => {
    //   this.userSettingsForm.controls.countries.setValue(res);
    // });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: any) => {
          if (position) {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.getZipCode({
              latitude: this.lat,
              longitude: this.lng
            });
          }
        },
        (error: any) => console.log(error)
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  getZipCode(payload: any) {
    this.dataService.getZipCode(payload).subscribe((res) => {});
  }

  explore() {}

  selectedSettings(payload: any) {
    let appSettingsObj: any = {};
    if (payload == 'Bangalore') {
      appSettingsObj = appStateFirebaseSample;
    } else {
      appSettingsObj = appStateFirebaseNull;
    }
    this.stateService.appSettingsSubject.next(appSettingsObj);
    // this.stateService.saveToLocalStorage(appSettingsObj);
    // this.stateService
    //   .saveUserSettingsToFirebase(appSettingsObj)
    //   .subscribe((res) => {});
    // this.ref.close(appSettingsObj);
  }

  unSelectedSettings() {
    this.stateService.appSettingsSubject.next(appStateFirebaseNull);
    // this.stateService.saveToLocalStorage(appStateDefault);
    // this.ref.close(appSettingsStateDefault);
  }

  continue() {}
}
