import { DemoMaterialModule } from './../../shared/demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';


@NgModule({
  declarations: [
    UserFormComponent,
    ContactListComponent,
    UserEditComponent,
    EditContactComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
})
export class ContactsModule { }
