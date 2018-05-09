import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorComponent} from "./error.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [ErrorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ErrorComponent]
})
export class ErrorModule { }
