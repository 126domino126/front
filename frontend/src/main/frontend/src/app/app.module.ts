
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
import { AuthenticationService}  from './authenticationService'
import {MarkService} from "./Mark/mark.service";


const appRoutes: Routes = [
  { path: 'marks', component: MarkComponent },
  { path: '', component: NavbarComponent },
  { path: 'login', component: LoginComponent },

  // { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MarkNewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
    providers: [ MarkService, AuthenticationService ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
