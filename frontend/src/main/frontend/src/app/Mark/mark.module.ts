import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkComponent } from './mark.component';
import {MarkService} from "./mark.service";
import {HttpModule} from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import {EventService} from "./event.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [MarkService, EventService],
  declarations: [MarkComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarkModule { }
