import { Component } from '@angular/core';
@Component(
  {  selector: 'app-calculator',  
    templateUrl: './calculator.component.html',  
    styleUrls: ['./calculator.component.scss']
  }
)export class CalculatorComponent {    
  firstNumber: number = 0;    
  secondNumber: number = 0;    
  operator: string = "";    
  result: number = 0;    
  calculate(): void 
  {       
    this.result = eval(this.firstNumber + this.operator + this.secondNumber)    
  }
}