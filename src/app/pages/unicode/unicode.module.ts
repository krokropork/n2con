import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';

import { UnicodeComponent }   from './unicode.component';

const UnicodeRoutes: Routes = [
    {
      path: "",
      component: UnicodeComponent
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UnicodeRoutes)
  ],
  declarations: [
    UnicodeComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class UnicodeModule { }
