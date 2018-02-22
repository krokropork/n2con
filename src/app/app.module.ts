import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRouting } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
