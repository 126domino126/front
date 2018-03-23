import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Mark } from './mark.model';
import {tap} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MarkService {

    private resourceUrl =  'http://localhost:8080/api/marks';

    constructor(private http: HttpClient) { }

    create(mark: Mark): Observable<Mark> {
        return this.http.post<Mark>(this.resourceUrl, mark, httpOptions);
    }

    update(mark: Mark): Observable<Mark> {
        return this.http.put(this.resourceUrl, mark, httpOptions);
    }

    find(id: number): Observable<Mark> {
        return this.http.get<Mark>(`${this.resourceUrl}/${id}`);
    }

    query(req?: any): Observable<Mark[]> {
        return this.http.get<Mark[]>(this.resourceUrl);
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, httpOptions);
    }
}
