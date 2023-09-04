import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public constructor(private signUpService: SignUpService) { }

  onSubmit(myForm: NgForm) {
    // console.warn(myForm.value);
    this.signUpService.signUpUser(myForm.value).subscribe((res: any) => {
      console.warn(res);
    })
  }

}
