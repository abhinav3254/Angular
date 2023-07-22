import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent {
  value: number = 0;
  increment(): void {
    this.value++;
  }

  decrement(): void {
    this.value--;
  }

  reset(): void {
    this.value = 0;
  }
}
