import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
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
  @Input() sidemenuItems: any[] = [];

  constructor(private _sidenavService: SidenavService) { }

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
