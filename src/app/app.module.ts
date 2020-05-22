import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RaitingComponent } from './raiting/raiting.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RaitingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
