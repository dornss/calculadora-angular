import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  display: string = '';
  digits: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

  appendToDisplay(digit: string) {
    this.display += digit;
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Error';
    }
  }

  clear() {
    this.display = '';
  }

  deleteLastDigit() {
    if (this.display.length > 0) {
      this.display = this.display.slice(0, -1);
    }
  }

  calculatePercentage() {
    try {
      const result = eval(this.display) / 100;
      this.display = result.toString();
    } catch (error) {
      this.display = 'Error';
    }
  }

}
