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
    optionalexpensesBtn = document.getElementsByClassName('optionalexpenses-btn'),
    countBbudgetBtn = document.getElementsByClassName('count-budget-btn');


let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');


let chooseIncome = document.querySelector('.choose-income'),
    checkSaving = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');



let money, time;

function start() {
    money = prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let monthExpenses = prompt("Статья обязательных расходов?", "");
            let priceMonthExpenses = prompt("Во сколько обойдется?", "");
            if (monthExpenses != null && priceMonthExpenses != null && monthExpenses != '' && priceMonthExpenses != '') {
                appData.optionalExpenses[monthExpenses] = priceMonthExpenses;
            } else {
                alert("Вы ввели неверные данные!");
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день:" + appData.moneyDay);
    },
    detectLevel: function () {
        if (appData.moneyDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyDay > 100 && appData.moneyDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function () {
        let getDeposit = confirm("У вас есть депозит?");
        if (getDeposit) {
            appData.saving = true;
        }
        if (appData.saving == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
        while (isFinite(items) || items == "" || items == null) {
            items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то ещё?"));
        appData.income.sort();
        appData.income.forEach(element => {
            alert("Способы доп. заработка: " + element);
        });
    },

};


appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();



for (let keys in appData) {
    console.log("Наша программа включает в себя данные: " + keys + " " + appData[keys]);
}