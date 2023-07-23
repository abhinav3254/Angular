import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  users() {
    // also import one module in app.component.ts name of that module is 
    // HttpClientModule and register it in imports
    return this.http.get(this.url);
  }
}
