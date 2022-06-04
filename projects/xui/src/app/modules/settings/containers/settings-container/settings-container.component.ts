import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsContainerComponent {

  selectedTab: any = 0;
  mainMenuItems: any = [
    {
      id: 'General',
      link: 'settings-general',
      name: 'General',
      label: 'app.settings.general-settings'
    },
    {
      id: 'Netas',
      link: 'settings-netas',
      name: 'Netas',
      label: 'app.settings.netas-settings'
    },
    {
      id: 'Content',
      link: 'settings-content',
      name: 'Content',
      label: 'app.settings.netas-settings'
    },
  ];

  constructor(
    private router: Router
  ) { }

  onSequenceChangeEvent(event: MatTabChangeEvent) {
    // console.log(event.index);
    let link: any = this.mainMenuItems[event.index].link;
    let currentUrl: any = `/settings/${link}`;
    this.router.navigate([currentUrl]);
  }

  selectTab(event) {
    this.selectedTab = event;
  }

}
