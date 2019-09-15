let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
};

    for(i = 0; i < 2; i++) {
        let monthExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
        let priceMonthExpenses = prompt("Во сколько обойдется?", "");
        appData.optionalExpenses[monthExpenses] = priceMonthExpenses;
    }
        // if( (typeof(monthExpenses)) != null && (typeof(priceMonthExpenses)) != null && monthExpenses != '' && priceMonthExpenses != '' && monthExpenses.length > 50) {
           
    
    appData.moneyDay = appData.budget/30;

alert("Бюджет на 1 день:" + appData.moneyDay);
 
if (appData.moneyDay < 100) {
    console.log("Минимальный уровень достатка");
} else if(appData.moneyDay > 100 && appData.moneyDay < 2000) {
    console.log("Средний уровень достатка");
} else if(appData.moneyDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
}



console.log(appData);