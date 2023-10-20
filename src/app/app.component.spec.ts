import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CalculadoraComponent,
        // ... outros componentes necessários para os testes
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calculadora'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calculadora-app');
  });
});
