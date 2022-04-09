import { Injectable, NgZone } from '@angular/core';
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
init('user_sAzkEymW27YsShZBaBeDW');

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly zone: NgZone
  ) {}

  default(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'default-notification-overlay'
    });
  }

  info(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'info-notification-overlay'
    });
  }

  success(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'success-notification-overlay'
    });
  }

  warn(message: string) {
    this.show(message, {
      duration: 2500,
      panelClass: 'warning-notification-overlay'
    });
  }

  error(message: string) {
    this.show(message, {
      duration: 3000,
      panelClass: 'error-notification-overlay'
    });
  }

  private show(message: string, configuration: MatSnackBarConfig) {
    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.zone.run(() => this.snackBar.open(message, undefined, configuration));
  }

  sendToAdminEmail(
    ticket_id: string,
    contact_email: string,
    contact: number,
    category: string,
    description: string
  ) {
    const templateParams = {
      ticket_id: ticket_id,
      contact_email: contact_email,
      contact: contact,
      category: category,
      description: description
    };

    emailjs
      .send(
        'service_u2myif6',
        'template_65jwmnz',
        templateParams,
        'user_sAzkEymW27YsShZBaBeDW'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  }
}
