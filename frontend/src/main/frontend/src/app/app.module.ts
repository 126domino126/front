
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {MarkComponent} from "./Mark/mark.component";
import {MarkModule} from "./Mark/mark.module";
import {NavbarComponent} from "./Layout/navbar/navbar.component";
import { MarkNewComponent } from './Mark/mark-new/mark-new.component';
import { LoginComponent } from './login/login.component';
import {MarkService} from "./Mark/mark.service";
import {MarkEditComponent} from "./Mark/mark-edit/mark-edit.component";
import {DemoComponent} from "./demo/component";
import {DemoModule} from "./demo/module";
import {CalendarModule} from "angular-calendar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LineChartDemoComponent} from "./chart/chart.component";
import {ChartsModule} from "ng2-charts";
import { NgQrScannerModule } from 'angular2-qrscanner';
import {ScannerComponent} from "./QRcodeScan/scanner.component";
import {HomeComponent} from "./Layout/home/home.component";
import {ScannerService} from "./QRcodeScan/scannerservice";
import {LoginService} from "./login/login.service";
import {AppUserService} from "./login/appUser.service";
import {LoginEditComponent} from "./login/edit/login.edit.component";
import {FavsComponent} from "./Favs/favs.component";


const appRoutes: Routes = [
  { path: 'calendar', component: DemoComponent },
  { path: 'marks/edit/:id', component: MarkEditComponent },
  { path: 'marks/new', component: MarkNewComponent },
  { path: 'marks', component: MarkComponent },
  { path: 'login', component: LoginComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'account-edit', component: LoginEditComponent },
  { path: 'favourites', component: FavsComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MarkNewComponent,
    MarkEditComponent,
    LoginComponent,
    LoginEditComponent,
    LineChartDemoComponent,
    ScannerComponent,
    HomeComponent,
    FavsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkModule,
    RouterModule.forRoot(
      appRoutes,
      {}
    ),
    DemoModule,
    CalendarModule.forRoot(),
    BrowserAnimationsModule,
    ChartsModule,
    NgQrScannerModule,
  ],
    providers: [ MarkService, ScannerService, LoginService, AppUserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
