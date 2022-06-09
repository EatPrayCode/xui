import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@chec/commerce.js/types/product';
//
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
//
//
import striptags from 'striptags';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];

  // RxJS Part
  subscriptions: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.subscriptions.add(
      this.route.data
        .pipe(
          map((data) =>
            data.collections.data.map((product: Product) => ({
              ...product,
              description: striptags(product.description),
            }))
          )
        )
        .subscribe({
          next: (res: Product[]) => (this.products = res),
          error: (err) => console.warn('Error on getProducts method. ', err),
          complete: () => console.info('getProducts Complete.'),
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
