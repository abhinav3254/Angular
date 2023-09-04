import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { }

  public logInUser(myFormValue: any): Observable<any> {
    const url = 'http://localhost:9091/user/login';
    return this.http.post(url, myFormValue);
  }

}
