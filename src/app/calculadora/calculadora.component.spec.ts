import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CalculadoraComponent } from './calculadora.component';
import { FormsModule } from '@angular/forms';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should append digits to the display', () => {
    component.onButtonClick('1');
    expect(component.display).toBe('1');
  });

  it('should clear the display', () => {
    component.onButtonClick('1');
    component.clear();
    expect(component.display).toBe('');
  });

  it('should calculate the result', () => {
    component.onButtonClick('1');
    component.onButtonClick('+');
    component.onButtonClick('2');
    component.onButtonClick('=');
    expect(component.display).toBe('3');
  });

  // Adicione mais testes conforme necessário para outras funcionalidades do componente
});
