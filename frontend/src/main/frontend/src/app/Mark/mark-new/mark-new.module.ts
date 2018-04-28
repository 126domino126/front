import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import {MarkNewComponent} from "./mark-new.component";
import {DemoUtilsModule} from "../../demo-utils/module";
import {MarkService} from "../mark.service";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    DemoUtilsModule,

  ],
  providers: [MarkService],
  declarations: [MarkNewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarkModule { }
