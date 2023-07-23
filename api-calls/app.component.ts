import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-calls';

  users: any;

  constructor(private userData: UserDataService) {
    // subscribe tells us that we have use the data in this component
    userData.users().subscribe((data) => {
      console.warn("data", data);
      this.users = data;
    });

  }

}
