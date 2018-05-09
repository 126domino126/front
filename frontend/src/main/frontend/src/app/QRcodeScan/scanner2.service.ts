import { Injectable } from '@angular/core';


@Injectable()
export class Scanner2Service {

  state: string;

  setState(s: string){
    this.state = s;
  }

  getState(): string{
    return this.state;
  }
}
