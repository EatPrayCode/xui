import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, Firestore, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { UtilsService } from './Utils.service';
import { doc, setDoc } from "firebase/firestore";
import { Contact } from '../models/Contact.Model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];
  private contact!: Contact;
  private db: any;
  contacts$!: Observable<Contact[]>;
  contactsSubject = new Subject<any[]>();

  constructor(private utilsService: UtilsService, private firestore: Firestore) {
    this.db = collection(this.firestore, 'contacts');
    this.getContacts();
  }

  emitContacts() {
    this.contactsSubject.next(this.contacts);
  }

  /// Get All Contacts /// OK
  getContacts() {
    this.contacts$ = collectionData(this.db) as Observable<Contact[]>;

    this.contacts$.subscribe((contacts: Contact[]) => {
      this.contacts = contacts;

      this.emitContacts();
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('Contacts Chargé!');
    });
  }

  /// Get Single Contact /// OK
  getContact(key: string) {
    return new Promise(
      (resolve, reject) => {
        var qry = query(this.db, where("key", "==", key));

        getDocs(qry).then((querySnapshot) => {
          if (querySnapshot) {
            console.log("Document data:", querySnapshot);
            querySnapshot.docs.forEach(element => {
              this.contact = element.data() as Contact;
            });
            resolve(this.contact);
          } else {
            //doc.data() will be undefined in this case
            console.error("No such document!");
            reject("No such document!")
          }
        });
      });
  }


  /// Get Single User By Email /// OK
  addUserName(username: string | null) {
    return new Promise(
      (resolve, reject) => {
        setDoc(doc(this.firestore, "usernames", username), { name: username }).then((querySnapshot) => {

          resolve({
            status: 'ADDED'
          });
        },
        err=>{
          reject({
            status: 'FAILED'
          })
        });
      });
  }

  /// Create Contact /// OK
  createContact() {
    const contact: any = {
      key: 'string',
      name: 'string',
      email: 'string',
      subject: 'string',
      message: 'string'
    };
    // const db = collection(this.firestore, 'usernames');
    // setDoc(doc(this.firestore, "usernames", "new-city-id"), {});

    addDoc(this.db, {
      key: this.utilsService.getKey(),
      name: contact.name || formatDate(new Date(), 'dd/MM/yyyy', 'en'),
      email: contact.email || '',
      subject: contact.subject || '',
      message: contact.message || '',
      dateCreation: formatDate(new Date(), 'dd/MM/yyyy', 'en'),
      dateModification: formatDate(new Date(), 'dd/MM/yyyy', 'en')
    });
  }

  /// Update Contact /// OK
  updateContact(key: string, contact: Contact) {
    this.contact.name = contact.name;
    this.contact.email = contact.email;
    this.contact.subject = contact.subject;
    this.contact.message = contact.message;
    this.contact.dateModification = formatDate(new Date(), 'dd/MM/yyyy', 'en');

    this.utilsService.getDocByKey(this.db, key).then((doc: any) => {
      updateDoc(doc.ref, this.contact);
    });
  }

  /// Remove Contact /// OK
  removeContact(contact: Contact) {
    this.utilsService.getDocByKey(this.db, contact.key).then((doc: any) => {
      deleteDoc(doc.ref);
    });
  }
}
