import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogInService } from 'src/app/services/log-in.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  error: string = "";

  public constructor(private logInService: LogInService, private router: Router) { }

  onSubmit(myForm: NgForm) {
    console.warn(myForm.value);
    this.logInService.logInUser(myForm.value).subscribe((res: any) => {
      console.warn(JSON.stringify(res));
    }, error => { // second parameter is to listen for error
      console.log(error);
      this.error = JSON.stringify(error.error.text);
      window.localStorage.setItem("token", error.error.text);
      this.router.navigateByUrl('/home');
    });
  }
}
