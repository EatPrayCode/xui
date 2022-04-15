import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { animateText, onSideNavChange } from '../../../../core/animations/sidenav.animations';
import { SidenavService } from '../../../../core/services/sidenav.service';

@Component({
  selector: 'app-admin-dashboard-left-menu',
  templateUrl: './admin-dashboard-left-menu.component.html',
  styleUrls: ['./admin-dashboard-left-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [onSideNavChange, animateText],
})
export class AdminDashboardLeftMenuComponent implements OnInit {

  public sideNavState: boolean = true;
  public linkText: boolean = false;
  @Output() selectNetaEvt = new EventEmitter();

  complexLinks: any[] = [
    {
      link: 'https://google.com/',
      caption: 'Narendra Modi',
      info: "Google search - I'm feeling lucky.",
      CSSClass: 'icon-google',
      id:'nmodi'
    },
    {
      link: 'https://microsoft.com/',
      caption: 'Shashi Tharoor',
      info: "Be what's next.",
      CSSClass: 'icon-microsoft',
      id:'shashi'
    },
    {
      link: 'https://microsoft.com/',
      caption: 'Amit Shah',
      info: "Be what's next.",
      CSSClass: 'icon-microsoft',
      id:'amits'
    },
    {
      link: 'https://angular.io/',
      caption: 'Rahul Gandhi',
      info: 'One framework. Mobile & desktop.',
      CSSClass: 'icon-angular',
      id:'rahulg'
    },
    {
      link: 'https://facebook.com/',
      caption: 'Sonia Gandhi',
      info: 'Facebook helps you connect and share with the people in your life.',
      CSSClass: 'icon-facebook',
      id:'soniag'
    },
  ]

  constructor(private _sidenavService: SidenavService) {}

  ngOnInit() {
    this.onSinenavToggle();
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 0);
    this._sidenavService.sideNavState$.next(this.sideNavState);
  }

  selectNetaLeftMenu(neta: any) {
    this.selectNetaEvt.emit(neta);
  }

}
