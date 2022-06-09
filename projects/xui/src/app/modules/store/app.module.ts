import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { LeathershipModule } from './leathership/leathership.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    SharedModule,
    LeathershipModule,
    RouterModule,
    HttpClientModule,
    CommonModule
  ],

  providers: []
})
export class AppModule {}
