import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { animateText, onSideNavChange } from '../../../../core/animations/sidenav.animations';
import { SidenavService } from '../../../../core/services/sidenav.service';

@Component({
  selector: 'app-reddit-client-left-menu',
  templateUrl: './reddit-client-left-menu.component.html',
  styleUrls: ['./reddit-client-left-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [onSideNavChange, animateText],
})
export class RedditClientLeftMenuComponent implements OnInit {

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
