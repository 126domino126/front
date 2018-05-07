import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {AppUserService} from "../../login/appUser.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AppUserService],
  declarations: [NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarModule { }
