import { Injectable } from '@angular/core';


@Injectable()
export class ScannerService {

  value: string;

  save(s: string){
    this.value = s;
    console.log(this.value);
  }

  load(){
    console.log(this.value);
    return this.value;
  }
}
