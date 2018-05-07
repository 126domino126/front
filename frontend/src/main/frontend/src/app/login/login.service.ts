import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {AppUser} from "./appUser.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  private resourceUrl =  'http://localhost:8080/api/appUsers';

  constructor(private http: HttpClient) { }

  create(appUser: AppUser): Observable<AppUser> {
    return this.http.post<AppUser>(this.resourceUrl, appUser, httpOptions);
  }

  update(appUser: AppUser): Observable<AppUser> {
    console.log(appUser);
    return this.http.put<AppUser>(this.resourceUrl, appUser, httpOptions);
  }

  find(id: number): Observable<AppUser> {
    return this.http.get<AppUser>(`${this.resourceUrl}/${id}`);
  }

  findByName(username: string): Observable<AppUser> {
    return this.http.get<AppUser>(`http://localhost:8080/api/appUser/${username}`);
  }

  query(req?: any): Observable<AppUser[]> {
    return this.http.get<AppUser[]>(this.resourceUrl);
  }

  delete(id: number): Observable<AppUser> {
    return this.http.delete<AppUser>(`${this.resourceUrl}/${id}`, httpOptions);
  }
}
