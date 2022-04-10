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

  mainMenuItems: any = [
    {
      id: 'settings-general',
      link: 'settings-general',
      name: 'settings-general',
      label: 'settings-general'
    },
    {
      id: 'settings-netas',
      link: 'settings-netas',
      name: 'settings-netas',
      label: 'settings-netas'
    }
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
 
}
