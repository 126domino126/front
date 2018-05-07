import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import {MarkNewComponent} from "./mark-new.component";
import {DemoUtilsModule} from "../../demo-utils/module";
import {MarkService} from "../mark.service";
import {ScannerService} from "../../QRcodeScan/scannerservice";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    DemoUtilsModule,

  ],
  providers: [MarkService, ScannerService],
  declarations: [MarkNewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarkModule { }
