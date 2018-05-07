import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Mark } from './mark.model';
import {tap} from "rxjs/operators";
import {Event2} from "./event.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventService {

    private resourceUrl =  'http://localhost:8080/api/events';

    constructor(private http: HttpClient) { }

    // create(event: Event2): Observable<Event2> {
    //     return this.http.post<Event2>(this.resourceUrl, event, httpOptions);
    // }
    //
    // update(mark: Mark): Observable<Mark> {
    //     return this.http.put(this.resourceUrl, mark, httpOptions);
    // }
    //
    // find(id: number): Observable<Mark> {
    //   return this.http.get<Mark>(`${this.resourceUrl}/${id}`);
    // }

    query(req?: any): Observable<Event2[]> {
        return this.http.get<Event2[]>(this.resourceUrl);
    }

    // delete(id: number): Observable<Mark> {
    //     return this.http.delete(`${this.resourceUrl}/${id}`, httpOptions);
    // }
}
