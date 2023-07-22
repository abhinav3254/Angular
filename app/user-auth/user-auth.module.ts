import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from './user-component/user-component.component';
import { FunctionCallComponent } from './function-call/function-call.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { BindingComponent } from './binding/binding.component';



@NgModule({
  declarations: [
    UserComponentComponent,
    FunctionCallComponent,
    CounterAppComponent,
    BindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponentComponent,
    FunctionCallComponent,
    CounterAppComponent,
    BindingComponent
  ]
})
export class UserAuthModule { }
