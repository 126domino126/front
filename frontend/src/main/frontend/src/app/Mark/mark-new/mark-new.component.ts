import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Mark} from "../mark.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {EventManager} from "@angular/platform-browser";
import {MarkService} from "../mark.service";
import {Image} from "../../Image/image.model";
import { Router} from "@angular/router";
import {CalendarEvent, CalendarEventAction} from "angular-calendar";
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import {Event2} from "../event.model";

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-mark-new',
  templateUrl: './mark-new.component.html',
  styleUrls: ['./mark-new.component.css']
})
export class MarkNewComponent implements OnInit {

  refresh: Subject<any> = new Subject();
  starts: string[] = [
  ];
  ends: string[] = [
  ];
  eventsSent: Event2[] = [
  ];

  activeDayIsOpen: boolean = true;

  mark: Mark = new Mark(null, '', 'http://sanjivanihospitalsirsa.com/wp-content/uploads/2017/03/noimage.gif','', false, [], []);
  isSaving: boolean;

  images: Image[] = [];
  constructor(private markService: MarkService,
              private eventManager: EventManager,
              private router: Router
              ) {
            }

  displayPhoto(fileInput) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = ((e) => {
        this.mark.mainImageSrc = e.target['result'];
      });
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  displayImage(fileInput, index) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = ((e) => {
        this.images[index].imageSrc = e.target['result'];
      });
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  addImage() {
     this.images.push(new Image(undefined, 'http://sanjivanihospitalsirsa.com/wp-content/uploads/2017/03/noimage.gif'));
  }

  removeImage(index) {
    this.images.splice(index, 1);
  }

  ngOnInit() {
    this.isSaving = false;
  }

  save() {
    this.isSaving = true;
    let i: number;
    for(i=0; i<this.eventsSent.length; i++){
      this.eventsSent[i].starting = new Date(this.starts[i]);
      this.eventsSent[i].ending = new Date(this.ends[i]);
    }

    this.mark.markImages = this.images;
    this.mark.events = this.eventsSent;
    this.markService.create(this.mark).subscribe( res => {
      this.mark = res;
      this.router.navigateByUrl('/marks');
    } );
  }

  addEvent(): void {
    this.eventsSent.push({
      title: 'New event',
      starting: new Date(),
      ending: new Date(),
      colorPrim: colors.red.primary,
      colorSec: colors.red.secondary,
      allDay: false,
      repeat: 0
    });
    this.starts[this.starts.length] = new Date().toISOString().slice(0,16);
    this.ends[this.ends.length] = new Date().toISOString().slice(0,16);
    this.refresh.next();
  }
}
