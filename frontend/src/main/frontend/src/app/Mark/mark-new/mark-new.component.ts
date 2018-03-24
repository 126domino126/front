import { Component, OnInit } from '@angular/core';
import {Mark} from "../mark.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {EventManager} from "@angular/platform-browser";
import {MarkService} from "../mark.service";
import {Image} from "../../Image/image.model";
import { Router} from "@angular/router";


@Component({
  selector: 'app-mark-new',
  templateUrl: './mark-new.component.html',
  styleUrls: ['./mark-new.component.css']
})
export class MarkNewComponent implements OnInit {

  mark: Mark = new Mark(null, '', '','', false, [], []);
  isSaving: boolean;

  images: Image[] = [];
  constructor(private markService: MarkService,
              private eventManager: EventManager,
              private router: Router,
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
     this.images.push(new Image(undefined, null));
  }

  removeImage(index) {
    this.images.splice(index, 1);
  }

  ngOnInit() {
    this.isSaving = false;
  }

  save() {
    this.isSaving = true;

    this.mark.markImages = this.images.slice(0);

    this.markService.create(this.mark).subscribe( res => {
      this.mark = res;
      this.router.navigateByUrl('/marks');
    } );
  }
}
