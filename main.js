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
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
            let monthExpenses = prompt("Статья обязательных расходов?", "");
            let priceMonthExpenses = prompt("Во сколько обойдется?", "");
            if( monthExpenses != null && priceMonthExpenses != null && monthExpenses != '' && priceMonthExpenses != '') {
                appData.optionalExpenses[monthExpenses] = priceMonthExpenses;
            } else {
               alert("Вы ввели неверные данные!");
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyDay = (appData.budget/30).toFixed();
        alert("Бюджет на 1 день:" + appData.moneyDay);
    },
    detectLevel: function() {
        if (appData.moneyDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyDay > 100 && appData.moneyDay < 2000) {
            console.log("Средний уровень достатка");
        } else if(appData.moneyDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function() {
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
    },
    chooseOptExpenses: function() {
        for(let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то ещё?"));
        appData.income.sort();
    }
};
