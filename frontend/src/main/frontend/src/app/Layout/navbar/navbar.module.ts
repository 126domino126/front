import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarModule { }
