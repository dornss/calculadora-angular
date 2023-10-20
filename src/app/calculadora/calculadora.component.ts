import { Component } from '@angular/core';
import { CalculadoraService } from '../services/calculadora-service.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  display: string = '';
  digits: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

  constructor(private calculadoraService: CalculadoraService) {}

  onButtonClick(value: string) {
    if (value === '=') {
      this.calculate();
    } else if (value === 'C') {
      this.clear();
    } else {
      this.display += value;
    }
  }

  appendToDisplay(value: string) {
    if (value === '.' && this.display.includes('.')) {
      return;
    }
    this.display += value;
  }

  deleteLastDigit() {
    if (this.display.length > 0) {
      this.display = this.display.slice(0, -1);
    }
  }

  calculate() {
    let result: number = parseFloat(this.calculadoraService.calcularExpressao(this.display));
    if (Number.isInteger(result)) {
      this.display = result.toString();
    } else {
      this.display = result.toFixed(2);
    }
  }

  clear() {
    this.display = '';
  }

  calculatePercentage() {
  if (this.display.includes('+') || this.display.includes('-') || this.display.includes('*') || this.display.includes('/')) {
    try {
      const expression = this.display.replace('%', '/100*');
      this.display = eval(expression).toFixed(2);
    } catch (error) {
      this.display = 'Erro';
    }
  } else {
    this.display = (parseFloat(this.display) / 100).toFixed(2);
  }
}

}
