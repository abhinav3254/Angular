import { Component } from '@angular/core';

@Component({
  selector: 'app-function-call',
  templateUrl: './function-call.component.html',
  styleUrls: ['./function-call.component.css']
})
export class FunctionCallComponent {
  // getName(): void {
  //   alert("subscribed");
  // }

  // addMe(num1: number, num2: number): void {
  //   alert(num1 + num2);
  // }

  // subMe(num1: number, num2: number): void {
  //   alert(num1 - num2);
  // }

  // getData(value: String): void {
  //   console.warn(value);
  // }

  displayOutput: String = '';
  getValue(val: string): void {
    console.warn(val);
    this.displayOutput = val;
  }
}
