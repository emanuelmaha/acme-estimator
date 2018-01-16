import {Component, Input} from '@angular/core';
import {Expense} from "../../../model/Expense";
import {ExpenseType} from "../../../model/ExpenseType";

@Component({
	selector: 'expense-hrchy',
	templateUrl: './expense-hrchy.html',
	styleUrls: ['expense-hrchy.css']
	
})
export class ExpenseHrchyComponent {
	ExpenseType: typeof ExpenseType = ExpenseType;
	@Input() expenses: Expense[];
	showAddMore: boolean = true;
	showCheckbox: boolean = false;

	
	public AddExpense(exp: Expense, expenseType: ExpenseType) {
		this.showAddMore = true;
		this.showCheckbox = false;
		let expense = new Expense();
		expense.expenseType = expenseType;
		expense.children = [];
		exp.children.push(expense)
	}
}
