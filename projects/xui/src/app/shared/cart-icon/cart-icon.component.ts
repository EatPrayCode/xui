import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit, OnDestroy {

  count = 0;
  price = `$0`;

  constructor() { }

  ngOnInit() {
    this.count = 5;
    this.price = `$1000`;
  }

  ngOnDestroy() { }

}