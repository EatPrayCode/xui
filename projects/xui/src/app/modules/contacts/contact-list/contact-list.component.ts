import { EditContactComponent } from './../edit-contact/edit-contact.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../../core/core.state';
import { Contact } from '../../../Models/Contact.Model';
import { AppService } from '../../../services/app.service';
import { ContactService } from '../../../services/Contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: any[] = [];
  contactSubscription!: Subscription;

  constructor(
    private contactService: ContactService,
    private dialog: MatDialog,
    public appService: AppService) { }

  ngOnInit() {
    this.contactSubscription = this.contactService.contactsSubject.subscribe(
      (contacts: any[]) => {
        this.contacts = contacts;
      }
    );
    this.contactService.emitContacts();
  }

  createContact() {
    this.openSettingsDialog({});
  }

  addUserName(){
    const userName:any = new Date().toISOString() || 'test';
    // this.contactService.addUserName(userName).then(res=>{
    //   debugger;
    // });
  }

  addMockContact() {
    this.contactService.createContact();
  }

  onDeleteContact(contact: Contact) {
    this.contactService.removeContact(contact);
  }

  onEditContact(data: any) {
    this.openSettingsDialog(data);
  }

  openSettingsDialog(data): void {
    let dialogRef = this.dialog.open(EditContactComponent, {
      hasBackdrop: true,
      disableClose: false,
      height: '100vh',
      minWidth: '90%',
      position: {
        right: '0px',
        bottom: '0px'
      },
      data: data
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy() {
    this.contactSubscription.unsubscribe();
  }
}
