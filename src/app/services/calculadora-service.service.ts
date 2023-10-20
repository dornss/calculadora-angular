import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  calcularExpressao(expressao: string): string {
    try {
      return eval(expressao).toString();
    } catch (error) {
      return 'Erro';
    }
  }
}
