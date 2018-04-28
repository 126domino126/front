import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import {MarkEditComponent} from "./mark-edit.component";
import {MarkService} from "../mark.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [MarkService],
  declarations: [MarkEditComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarkModule { }
