import {Component} from '@angular/core';
import {Calculator} from "../../model/Calculator";
import {ExpenseType} from "../../model/ExpenseType";
import {Expense} from "../../model/Expense";

@Component({
	selector: 'calculator',
	templateUrl: './calculator.component.html'
})
export class CalculatorComponent {
	ExpenseType: typeof ExpenseType = ExpenseType;
	calculator: Calculator;

	constructor() {
		this.calculator = new Calculator();
		this.calculator.expenses = [];
	}

	public calculate() {
		this.calculator.Calculate();
	}

	public AddExpense(expenseType: ExpenseType) {
		let expense = new Expense();
		expense.expenseType = expenseType;
		expense.children = [];
		expense.id = this.calculator.expenses.length + 1 ;
		this.calculator.expenses.push(expense)
	}
}
