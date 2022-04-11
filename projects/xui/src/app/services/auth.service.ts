import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updatePassword, User } from 'firebase/auth';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {

  constructor() { }

  createNewUser(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {

        createUserWithEmailAndPassword(getAuth(), email, password).then(
          () => {
            resolve();
          },
          (error: any) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    email = 'yogifromhills@gmail.com';
    password = 'Ashu@7569';
    return new Promise<void>(
      (resolve, reject) => {
        signInWithEmailAndPassword(getAuth(), email, password).then(
          (res: any) => {
            resolve(res);
          },
          (error) => {
            reject(error.code);
          }
        );
      }
    );
  }

  signOutUser() {
    signOut(getAuth());
  }

  updatePasswordUser(user: User, newPassword: string) {
    return new Promise<void>(
      (resolve, reject) => {
        updatePassword(user, newPassword).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error.code);
          }
        );
      }
    );
  }
}
