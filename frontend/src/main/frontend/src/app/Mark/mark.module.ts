import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkComponent } from './mark.component';
import {MarkService} from "./mark.service";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [MarkService],
  declarations: [MarkComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarkModule { }
