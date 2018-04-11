import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Mark} from "../mark.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {EventManager} from "@angular/platform-browser";
import {MarkService} from "../mark.service";
import {Image} from "../../Image/image.model";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-mark-new',
  templateUrl: './mark-edit.component.html',
  styleUrls: ['./mark-edit.component.css']
})
export class MarkEditComponent implements OnInit, AfterViewInit {

  private sub: any;
  idcko: number;

  mark: Mark;
  isSaving: boolean;

  images: Image[] = [];
  constructor(private markService: MarkService,
              private eventManager: EventManager,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idcko = +params['id']; // (+) converts string 'id' to a number
      this.markService.find(this.idcko).subscribe(
        (res => {this.mark = res;
        this.images = this.mark.markImages;
          console.log(this.mark);
          console.log(this.images)
        })
      );

      // In a real app: dispatch action to load the details here.
    });
    this.isSaving = false;
    this.markService.find(this.idcko).subscribe(
      (res => {this.mark = res;
        this.images = this.mark.markImages;
        console.log(this.mark);
        console.log(this.images)
      })
    );
  }
  ngAfterViewInit(){
    console.log('View-edit');
    console.log(this.idcko);
    this.markService.find(this.idcko).subscribe(
      (res => {this.mark = res;
        this.images = this.mark.markImages;
        console.log(this.mark);
        console.log(this.images)
      })
    );
    console.log(this.mark.title);
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

  save() {
    this.isSaving = true;

    this.mark.markImages = this.images.slice(0);

    this.markService.create(this.mark).subscribe( res => {
      this.mark = res;
      this.router.navigateByUrl('/marks');
    } );
  }
}
