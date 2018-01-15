import { Component } from '@angular/core';
import {Calculator} from "../../model/Calculator";

@Component({
    selector: 'calculator',
    templateUrl: './calculator.component.html'
})
export class CalculatorComponent {
    calculator: Calculator;
    
    constructor(){
        this.calculator = new Calculator();
        this.calculator.expenses = [];
    }

    public calculate() {
        this.calculator.Calculate();
    }
}
