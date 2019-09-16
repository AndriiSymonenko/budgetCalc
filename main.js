let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
};

    for(let i = 0; i < 2; i++) {
        let monthExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
        let priceMonthExpenses = prompt("Во сколько обойдется?", "");
        if( monthExpenses != null && priceMonthExpenses != null && monthExpenses != '' && priceMonthExpenses != '') {
            appData.optionalExpenses[monthExpenses] = priceMonthExpenses;
        } else {
           alert("Вы ввели неверные данные!");
        }
    }
        
    console.log(typeof(priceMonthExpenses));

        
    appData.moneyDay = appData.budget/30;
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


console.log(appData);