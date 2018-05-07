import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Mark} from "../mark.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {EventManager} from "@angular/platform-browser";
import {MarkService} from "../mark.service";
import {Image} from "../../Image/image.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs/Subject";


@Component({
  selector: 'app-mark-new',
  templateUrl: './mark-edit.component.html',
  styleUrls: ['./mark-edit.component.css']
})
export class MarkEditComponent implements OnInit, AfterViewInit {

  private sub: any;
  idcko: number;

  mark: Mark = new Mark(null,'', '' , 'http://sanjivanihospitalsirsa.com/wp-content/uploads/2017/03/noimage.gif','',false, [], []);
  isSaving: boolean;

  refresh: Subject<any> = new Subject();

  starts: string[] = [
  ];
  ends: string[] = [
  ];
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
        (res => {
          this.mark = res;
          this.images = this.mark.markImages;

            for (let i =0; i<this.mark.events.length; i++) {
                this.starts[i] =  new Date(res.events[i].starting).toISOString().slice(0,16);
                this.ends.push(new Date(res.events[i].ending).toISOString().slice(0,16));
              }
        })
      );
    });
    this.isSaving = false;
  }

  ngAfterViewInit(){
    this.markService.find(this.idcko).subscribe(
      (res => {this.mark = res;
        this.images = this.mark.markImages;
        for (let i =0; i<this.mark.events.length; i++) {
          this.starts.push(this.mark.events[i].starting.toString().slice(0,16));
          this.ends.push(this.mark.events[i].ending.toString().slice(0,16));
        }
      })
    );

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

  save() {
    this.isSaving = true;

    this.mark.markImages = this.images.slice(0);
    for(let i=0; i<this.mark.events.length; i++){
      this.mark.events[i].starting = new Date(this.starts[i]);
      this.mark.events[i].ending = new Date(this.ends[i]);
    }

    this.markService.create(this.mark).subscribe( res => {
      this.mark = res;
      this.router.navigateByUrl('/marks');
    } );
  }
}
