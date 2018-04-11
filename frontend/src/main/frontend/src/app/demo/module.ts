import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from '../demo-utils/module';
import { DemoComponent } from './component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        NgbModalModule.forRoot(),
        CalendarModule.forRoot(),
        DemoUtilsModule,
        RouterModule
    ],
    declarations: [DemoComponent],
    exports: [DemoComponent]
})
export class DemoModule {}
