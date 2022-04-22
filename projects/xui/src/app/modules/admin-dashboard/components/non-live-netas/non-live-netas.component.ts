import { UserService } from './../../../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../environments/environment';
import { tap } from 'rxjs/operators';
import { of, BehaviorSubject, pipe } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Airtable, Base } from 'ngx-airtable';

import { from, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { DomSanitizer, TransferState } from '@angular/platform-browser';
import { traceUntilFirst } from '@angular/fire/performance';
import { getDownloadURL, Storage, uploadBytes } from '@angular/fire/storage';
import { keepUnstableUntilFirst } from '@angular/fire';
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

const TRANSPARENT_PNG
  = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
@Component({
  selector: 'app-non-live-netas',
  templateUrl: './non-live-netas.component.html',
  styleUrls: ['./non-live-netas.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NonLiveNetasComponent implements OnInit {

  nonLiveNetas$: any = of([]);
  public readonly downloadUrl$: Observable<string>;
  imageToShow$: BehaviorSubject<any> = new BehaviorSubject({});
  fb;
  downloadURL: Observable<string>;
  urlTest: any = 'https://firebasestorage.googleapis.com/v0/b/projectx-dev-92d22.appspot.com/o/images%2Fmountains.jpg?alt=media&token=22c972f6-0ded-4d28-9e6a-fa0897d489e2';

  imageToShow: any;
  isImageLoading: boolean = false;
  sample: any = {};

  constructor(
    private _airtable: Airtable,
    private storage: Storage,
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    private userService: UserService
  ) {
    // const icon = ref(storage, 'admin-uploads/aypqssti.png');
    // this.downloadUrl$ = from(getDownloadURL(icon)).pipe(
    //   keepUnstableUntilFirst,
    //   traceUntilFirst('storage'),
    //   startWith(TRANSPARENT_PNG),
    // );
    const base: Base = this._airtable
      .base('app0blxbqN1rHDD24');
    this.nonLiveNetas$ = base.table({
      tableId: 'tblL0z0AtzG8d5OWG'
    }).select({ maxRecords: 10 })
      .firstPage().pipe(tap(res => {
        console.log(res);
        const asdf = `images/mountains.jpg`;
        this.uploadAirtableToFirebase(asdf, res[1]);
      })).subscribe();
  }

  ngOnInit(): void { }

  uploadAirtableToFirebase(path, obj) {
    this.getImage(this.urlTest).pipe(
      tap(res => {
        const storage = getStorage();
        const storageRef = ref(storage, 'images/testblob.jpg');
        uploadBytes(storageRef, res).then((snapshot) => {
          console.log('Uploaded a blob or file!');
          getDownloadURL(storageRef).then((firebasefileurl) => {
            // Insert url into an <img> tag to "download"
            this.makeFirebaseObj(firebasefileurl, obj);
          },
            err => {
            });
        });
        this.imageToShow$.next(res);
      })
    )
      .subscribe();
  }

  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const storage = getStorage();
    const storageRef = ref(storage, `images/testblob.jpg`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.then(res => {

    },
      err => {

      });
  }

  makeFirebaseObj(firebasefileurl, obj) {
    delete obj.fields.image[0]['thumbnails'];
    obj.fields.image[0].url = firebasefileurl;
    const sampleObj = {
      ...obj.fields
    };
    console.log(sampleObj);
    
    this.userService.saveNetaAirtableToFirebase(sampleObj).then(res => {
      debugger;
    },
      err => {
        debugger;
      });

    // const fileRef = this.storage.ref(filePath);
    // const task = this.storage.upload(`RoomsImages/${n}`, file);
    // task
    //   .snapshotChanges()
    //   .pipe(
    //     finalize(() => {
    //       this.downloadURL = fileRef.getDownloadURL();
    //       this.downloadURL.subscribe(url => {
    //         if (url) {
    //           this.fb = url;
    //         }
    //         console.log(this.fb);
    //       });
    //     })
    //   )
    //   .subscribe(url => {
    //     if (url) {
    //       console.log(url);
    //     }
    //   });
  }

  testfn(path) {
    // Create a reference to the file we want to download
    const storage = getStorage();
    const starsRef = ref(storage, path);

    // Get the download URL
    getDownloadURL(starsRef)
      .then((url) => {
        // Insert url into an <img> tag to "download"

        this.urlTest = url;
        debugger;
        // this.downloadIMAGE(url);
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          // ...
          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      });
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(imageUrl, { responseType: 'blob' }).pipe(tap(res => {
      console.log(res);
    }));
  }

  thumbnail: any;

  getData() {
    return this.httpClient.get('/assets/config.json');
  }

  downloadIMAGE(yourImageUrl) {
    this.getImage(yourImageUrl).subscribe((data: any) => {
      this.isImageLoading = false;
      this.imageToShow = data;
      debugger;
      let objectURL = 'data:image/jpeg;base64,' + data;
      // let objectURL = URL.createObjectURL(data);
      const image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      this.imageToShow$.next(image);
      this.thumbnail = image;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  uploadToFirebase(event) {
    const uploadObj: any = {
      ...event.fields
    };
  }
}
