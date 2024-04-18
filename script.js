// Challenge 1

function tempConverter(fahrenheitNum) {
  let celsius = (fahrenheitNum - 32) * (5 / 9);
  console.log(
    fahrenheitNum + " fahrenheits are " + celsius + " degress celsius"
  );
}

tempConverter(100);

// Challenge 1.2

function tempConverter2(fahrenheitNum) {
  let celsius = (fahrenheitNum - 32) * (5 / 9);
  return celsius;
}

let result = tempConverter2(80);
console.log("fahrenheits are " + result + " degrees celsius");

// Challenge 2

let tipCalculator = function (total, tipPercentage = 0.1) {
  return total * tipPercentage;
};

let tipAmount = tipCalculator(50);
console.log("$" + tipAmount);

let anotherTip = tipCalculator(30, 0.2);
console.log("$" + anotherTip);

// Challenge 3

function gradeCalculator(studentScore, totalScore) {
  let grade = Math.round((studentScore / totalScore) * 100 * 100) / 100;

  let gradeLetter = "";

  if (grade >= 90) {
    gradeLetter = "A";
  } else if (grade >= 80) {
    gradeLetter = "B";
  } else if (grade >= 70) {
    gradeLetter = "C";
  } else if (grade >= 60) {
    gradeLetter = "D";
  } else {
    gradeLetter = "F";
  }

  console.log(`Your grade is ${grade.toFixed(2)} this is ${gradeLetter}`);
}

gradeCalculator(140, 150);

// Objects practice

let firstBook = {
  title: "Harry Potter and the Goblet of Fire",
  author: "J.K. Rowling",
  pagesNum: 400,
};

let returnObject = function (objectToReturn) {
  return objectToReturn;
};

let objectResult = returnObject(firstBook);
console.log(objectResult);

// Challenge 4

let myAccount = {
  name: "Jorge",
  income: 0,
  expenses: 0,
};

function addIncome(accountObj, amount) {
  accountObj.income += amount;
}

function addExpenses(accountObj, amount) {
  accountObj.expenses += amount;
}
function resetBalance(accountObj) {
  accountObj.income = 0;
  accountObj.expenses = 0;
}
function getSummary(accountObj) {
  let balance = accountObj.income - accountObj.expenses;

  console.log(
    `Account for the ${accountObj.name}. Account is ${balance}. Expenses are ${accountObj.expenses}, income is ${accountObj.income}`
  );
}

addIncome(myAccount, 1000);
addExpenses(myAccount, 950);
getSummary(myAccount);

//Challenge 5

const dreamDestinations = ["Thailand", "Ireland", "Germany", "Egypt"];

for (let i = 0; i < dreamDestinations.length; i++) {
  let count = i + 1;
  console.log(`${count}. ${dreamDestinations[i]}`);
}

const dreamDestinations2 = ["Rio", "Medellin", "Manchester", "Estambul"];

dreamDestinations2.forEach(function (destination, index) {
  console.log(`${index + 1}. ${destination}`);
});
