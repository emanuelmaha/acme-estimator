import {ExpenseType} from "./ExpenseType";
import {COMPUTERS_COST, NETWORK_COST, SERVER_COST} from "./Costs";

export class Expense {
	expenseType: ExpenseType;
	id: number;
	children: Expense[];

	public GetExpenseTotalCost(): number {
		let totalCost = Expense.GetExpenseTypeCost(this.expenseType);
		for (let child of this.children) {
			totalCost += child.GetExpenseTotalCost();
		}

		return totalCost;
	}

	public static GetExpenseTypeCost(expenseType: ExpenseType): number {
		switch (expenseType) {
			case ExpenseType.Computer:
				return COMPUTERS_COST;
			case ExpenseType.Network:
				return NETWORK_COST;
			case ExpenseType.Server:
				return SERVER_COST;
		}
	}
}
