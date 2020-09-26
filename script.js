let expensesArray =[];
const amount = document.querySelector('.amount');
const date = document.querySelector('.date');
const merchant = document.querySelector('.merchant');
const description = document.querySelector('.description');
const submitButton = document.querySelector('.submit-button');
//const newCell = document.createElement('td')
//each time the submit button is pressed

class Expense {
	constructor(expense){
		this.amount = expense.amount;
		this.date = expense.date;
		this.merchant = expense.merchant;
		this.description = expense.description;
	}
}

const createExpense = () => {
	userInput = {
		amount: amount.value,
		date: date.value,
		merchant: merchant.value,
		description: description.value
	}
	let expenseObject = new Expense(userInput);
	expensesArray.push(expenseObject);
	insertRow(expenseObject);
}

const insertCells = (expenseObject, newRow, newCell) => {
	for (let prop in expenseObject){
		let newCell = newRow.insertCell(-1);
		let newCellText = document.createTextNode(expenseObject[prop]);
		newCell.appendChild(newCellText);
	}
}

const insertRow = (expenseObject) => {
	let tableRef = document.querySelector('.table');
	let newRow = tableRef.insertRow(-1);
	insertCells(expenseObject, newRow);
}

submitButton.addEventListener('click', function(){
	//check whether or not all input fields were filled
	//insert newRow
	createExpense();
})