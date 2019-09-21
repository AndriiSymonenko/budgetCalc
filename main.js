let money, time;

function start() {
    money = prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money =="" || money == null) {
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
};


function chooseOptExpenses() {
    for(let i = 0; i < 2; i++) {
        let monthExpenses = prompt("Статья обязательных расходов?", "");
        let priceMonthExpenses = prompt("Во сколько обойдется?", "");
        if( monthExpenses != null && priceMonthExpenses != null && monthExpenses != '' && priceMonthExpenses != '') {
            appData.optionalExpenses[monthExpenses] = priceMonthExpenses;
        } else {
           alert("Вы ввели неверные данные!");
        }
    }
        
}
    
chooseOptExpenses();

    appData.moneyDay = (appData.budget/30).toFixed();
function detectDayBudget() {
    alert("Бюджет на 1 день:" + appData.moneyDay);
}
 
detectDayBudget();

function detectLevel() {
    if (appData.moneyDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if(appData.moneyDay > 100 && appData.moneyDay < 2000) {
        console.log("Средний уровень достатка");
    } else if(appData.moneyDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка");
    }
}

detectLevel();

function checkSavings() {
    let getDeposit = confirm("У вас есть депозит?");
    if(getDeposit) {
        appData.saving = true;
    }
    if(appData.saving == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

console.log(appData);