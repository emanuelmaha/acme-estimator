import {Expense} from "./Expense";

export class Calculator {
	expenses: Expense[];
	totalCost: number;
	
	public Calculate(){
		this.totalCost = 0;
		for (let expens of this.expenses) {
			this.totalCost += expens.GetExpenseTotalCost();
		}
	}
}