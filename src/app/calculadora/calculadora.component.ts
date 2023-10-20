import { Component } from '@angular/core';
import { CalculadoraService } from '../services/calculadora-service.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  display: string = '';
  digits: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

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
    this.display += value;
  }

  deleteLastDigit() {
    if (this.display.length > 0) {
      this.display = this.display.slice(0, -1);
    }
  }

  calculate() {
    this.display = this.calculadoraService.calcularExpressao(this.display);
  }

  clear() {
    this.display = '';
  }
}
