import { tap } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from 'projects/xui/src/app/services/user.service';

@Component({
  selector: 'app-admin-netainfo',
  templateUrl: './admin-netainfo.component.html',
  styleUrls: ['./admin-netainfo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminNetainfoComponent implements OnInit {

  unapprovedRecords$: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.unapprovedRecords$ = this.userService.getUnapprovedNetaInfoRecords().pipe(tap(res => {
      
    }));
  }

  onApproveChange(record: any) {
    this.userService.approveNetaDetailsChange(record).then(res=>{
      
    },
    err=>{
      
    });
    this.userService.setNetaDetailsUserSettingsObj(record).then(res=>{
      
    },
    err=>{
      
    });
    
  }

  onRejectChange(record: any) {

  }

}
