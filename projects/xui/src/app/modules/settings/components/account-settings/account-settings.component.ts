import { UserService } from '../../../../services/user.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

import { getAuth } from "firebase/auth";


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountSettingsComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  usernameaccount: any = '';
  netaInfoAvailable: boolean = false;

  constructor(
    private userservice: UserService,
  ) { }

  ngOnInit() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user && user.uid) {
      this.getNetaDetails(user);
    }
  }

  getNetaDetails(user) {
    this.userservice.getNetaInfoSettings(user.uid).then(res => {
      this.netaInfoAvailable = true;
    }, err => {
      this.netaInfoAvailable = false;
    });
  }

  save() {
    const auth = getAuth();
    const user = auth.currentUser; // null if
    const res1 = { username: this.usernameaccount, manifesto: {}, videos: {}, news: {}, basicinfo: {}, location: {} };
    this.userservice.requestNetaDetailsChange(user.uid, res1).then(res => { }, err => { });
  }
}
