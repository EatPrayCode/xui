import { HttpClient } from '@angular/common/http';
import { of, Observable, forkJoin } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Airtable, Base } from 'ngx-airtable';
import { tap, map } from 'rxjs/operators';
import { getDownloadURL, Storage, uploadBytes } from '@angular/fire/storage';
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { netaAirTable } from '~/app/models/constant';
import { UserService } from '~/app/services/user.service';

const ELEMENT_DATA: netaAirTable[] = [];

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomGridComponent implements OnInit {

  displayedColumns: string[] = ['select', 'netaname', 'state', 'party', 'image', 'actions'];
  airBaseSource = new MatTableDataSource<netaAirTable>([]);
  selectionAirtable = new SelectionModel<netaAirTable>(true, []);
  selectionFirebase = new SelectionModel<netaAirTable>(true, []);
  firebaseSource = new MatTableDataSource<netaAirTable>([]);

  airtableList: any = [
    {
      baseId: 'app0blxbqN1rHDD24',
      tableId: 'tbli25Rj23fMFdZ1v',
      viewValue: 'Netas Airtable'
    },
    {
      baseId: 'app0blxbqN1rHDD24',
      tableId: 'tblVLi5Oe0znjNQSw',
      viewValue: 'Netas National Airtable'
    }
  ];

  firebaseTableList: any = [
    {
      tableId: 'netas-sample',
      viewValue: 'Netas National'
    },
    {
      tableId: 'netas-sample',
      viewValue: 'Netas History'
    }
  ];

  table1$: Observable<any> = of([]);
  table2$: Observable<any> = of([]);

  constructor(
    private _airtable: Airtable,
    private changeDetectorRefs: ChangeDetectorRef,
    private userService: UserService,
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  handleAirtableTableListChange(event) {
    this.table1$ = this.createAirtableObservable(event);
    this.table1$.pipe(tap(res => { }))
      .subscribe(res => {
        const resultData = res.map(ele => {
          return {
            ...ele.fields,
            airId: ele.id
          };
        });
        this.airBaseSource.data = [...resultData];
        this.changeDetectorRefs.detectChanges();
      });
  }

  handleFirebaseTableListChange(event) {
    this.table2$ = this.createFirebaseObservable(event);
    this.table2$.pipe(tap(res => { }))
      .subscribe(res => {
        this.firebaseSource.data = res || [];
        this.changeDetectorRefs.detectChanges();
      });
  }

  createAirtableObservable(payload): Observable<any> {
    const { baseId, tableId } = payload;
    const base: Base = this._airtable
      .base(baseId);
    return base.table({
      tableId: tableId
    }).select({}).all();
  }

  createFirebaseObservable(payload): Observable<any> {
    return this.userService.getAllNetas();
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleFirebase() {
    this.isAllSelectedFirebase() ?
      this.selectionFirebase.clear() :
      this.firebaseSource.data.forEach(row => this.selectionFirebase.select(row));
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleAirtable() {
    this.isAllSelectedAirtable() ?
      this.selectionAirtable.clear() :
      this.airBaseSource.data.forEach(row => this.selectionAirtable.select(row));
  }

  isAllSelectedAirtable() {
    const numSelected = this.selectionAirtable.selected.length;
    const numRows = this.airBaseSource.data.length;
    return numSelected === numRows;
  }

  isAllSelectedFirebase() {
    const numSelected = this.selectionFirebase.selected.length;
    const numRows = this.firebaseSource.data.length;
    return numSelected === numRows;
  }

  handleSyncToFirebase() {
    const selectedNetas: any = this.selectionAirtable.selected;
    console.log(selectedNetas);
    selectedNetas.forEach((element: netaAirTable) => {
      this.uploadToFirebase(element);
    });
  }

  uploadToFirebase(event: netaAirTable) {
    const imageurl = event.image[0].url;
    const netaname = event.netaname;
    const storage = getStorage();
    const storageRef = ref(storage, `images/${netaname}.jpg`);
    this.getImageByUrl(imageurl).subscribe(res => {
      uploadBytes(storageRef, res).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        getDownloadURL(storageRef).then((firebasefileurl) => {
          // Insert url into an <img> tag to "download"
          this.uploadObjToFirebase(firebasefileurl, event);
        },
          err => {
          });
      });
    });
  }

  uploadObjToFirebase(firebasefileurl, obj: netaAirTable) {
    delete obj.image[0]['thumbnails'];
    const image = { ...obj.image[0] };
    delete obj.image;
    image.url = firebasefileurl;
    const sampleObj: netaAirTable = {
      ...obj,
      image
    };
    console.log(sampleObj);
    this.userService.saveNetaAirtableToFirebase(sampleObj).then(res => {

    },
      err => {
      });
  }

  getImageByUrl(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(imageUrl, { responseType: 'blob' });
  }

  bulkSync(arrayObs) {


  }


}
