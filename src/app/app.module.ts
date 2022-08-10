import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import ColorSchemeSwitcherComponent from "../components/color-scheme-switcher/color-scheme-switcher.component";



@NgModule({
  declarations: [
    AppComponent,
    ColorSchemeSwitcherComponent,
    ColorSchemeSwitcherComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
