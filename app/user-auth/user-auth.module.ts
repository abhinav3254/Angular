import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from './user-component/user-component.component';
import { FunctionCallComponent } from './function-call/function-call.component';



@NgModule({
  declarations: [
    UserComponentComponent,
    FunctionCallComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponentComponent,
    FunctionCallComponent
  ]
})
export class UserAuthModule { }
