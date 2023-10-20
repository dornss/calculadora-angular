import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraService } from './services/calculadora-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CalculadoraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
