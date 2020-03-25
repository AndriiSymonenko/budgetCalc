let startCheckButtom = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];


let expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.querySelector('.expenses-item-btn'),
    optionalexpensesBtn = document.querySelector('.optionalexpenses-btn'),
    countBbudgetBtn = document.querySelector('.count-budget-btn');




let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');


let chooseIncome = document.querySelector('.choose-income'),
    checkSaving = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

console.log(budgetValue);

let money, time;


startCheckButtom.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");


    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});


expensesItemBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let monthExpenses = expensesItem[i].value;
        let priceMonthExpenses = expensesItem[++i].value;
        if (monthExpenses != null && priceMonthExpenses != null && monthExpenses != '' && priceMonthExpenses != '') {
            appData.optionalExpenses[monthExpenses] = priceMonthExpenses;
            sum += +priceMonthExpenses;
        } else {
            alert("Вы ввели неверные данные!");
        }
    }
    expensesValue.textContent = sum;
});

console.log(optionalexpensesBtn);
console.log(optionalexpensesItem);

optionalexpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let opt = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBbudgetBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyDay = (appData.budget / 30).toFixed();
        daybudgetValue.textContent = appData.moneyDay;

        if (appData.moneyDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyDay > 100 && appData.moneyDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Ошибка";
        }
    } else {
        daybudgetValue.textContent = 'Произошла ошибка!';
        startCheckButtom.innerHTML = 'СТАРТ ЗДЕСЬ'
    }
});


chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});


checkSaving.addEventListener('click', function () {
    if (appData.saving) {
        appData.saving = false;
    } else {
        appData.saving = true;
    }
});


chooseSum.addEventListener('input', function () {
    if (appData.saving) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});



choosePercent.addEventListener('input', function () {
    if (appData.saving) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
};


for (let keys in appData) {
    console.log("Наша программа включает в себя данные: " + keys + " " + appData[keys]);
}