import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ReplacePipe } from './pipes/replace.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    DomSeguroPipe,
    ReplacePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
      provide: LOCALE_ID, useValue: 'es-CO'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }