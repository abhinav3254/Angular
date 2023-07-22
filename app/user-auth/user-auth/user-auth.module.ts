import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from './user-component/user-component.component';
import { FunctionCallComponent } from './function-call/function-call.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { BindingComponent } from './binding/binding.component';
import { NestedobjectsComponent } from './nestedobjects/nestedobjects.component';



@NgModule({
  declarations: [
    UserComponentComponent,
    FunctionCallComponent,
    CounterAppComponent,
    BindingComponent,
    NestedobjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponentComponent,
    FunctionCallComponent,
    CounterAppComponent,
    BindingComponent,
    NestedobjectsComponent
  ]
})
export class UserAuthModule { }
