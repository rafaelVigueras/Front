import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceResponse } from '../models/response';
import { SystemUser } from '../models/system-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL_API = 'http://localhost:60834/api';  // URL to web api

  constructor(private http: HttpClient) { }

  getAll(): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(this.URL_API + '/SystemUser/GetAll');
  }

  getById(id: number): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(this.URL_API + '/SystemUser/Get/' + id);
  }

  delete(systemUser: SystemUser): Observable<ServiceResponse> {
    console.log(systemUser);
    return this.http.put<ServiceResponse>(this.URL_API + '/SystemUser/Update', systemUser);
  }


}
