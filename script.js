let expensesArray =[];
const amount = document.querySelector('.amount');
const date = document.querySelector('.date');
const merchant = document.querySelector('.merchant');
const description = document.querySelector('.description');
const submitButton = document.querySelector('.submit-button');
const tableRef = document.querySelector('.table');

class Expense {
	constructor(expense){
		this.amount = expense.amount;
		this.date = expense.date;
		this.merchant = expense.merchant;
		this.description = expense.description;
		this.deleteRow = document.createElement('i');
		this.newRow = tableRef.insertRow(-1);
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
	attachEventListener(expenseObject);
}

const attachEventListener = (expenseObject) => {
	expenseObject.deleteRow.addEventListener('click', function(){
		deleteRow(expenseObject);
	})
}

const insertCells = (expenseObject, newRow, newCell) => {
	for (let prop in expenseObject){
		if (prop === 'deleteRow'){
			expenseObject[prop].classList = 'fa fa-trash';
			let newCell = newRow.insertCell(-1);
			newCell.appendChild(expenseObject[prop]);
		} else if (prop === 'newRow'){
			//skip
		} else {
			let newCell = newRow.insertCell(-1);
			let newCellText = document.createTextNode(expenseObject[prop]);
			newCell.appendChild(newCellText);
		}
	}
}

const deleteRow = (expenseObject) => {
	tableRef.deleteRow(expenseObject.newRow.rowIndex);
}

const insertRow = (expenseObject) => {
	let newRow = expenseObject.newRow;
	insertCells(expenseObject, newRow);
}

submitButton.addEventListener('click', function(){
	createExpense();
})