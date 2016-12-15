/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HowMany } from './how-many.component'
import { ProbaComponent } from './proba.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HowMany, ProbaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }