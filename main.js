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


    let monthExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
    let priceMonthExpenses = +prompt("Во сколько обойдется?", "");

    appData.expenses[monthExpenses] = priceMonthExpenses;



alert("Бюджет на 1 день" + appData.budget/30);
console.log(appData);