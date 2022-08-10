"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let d = b**2-4*a*c;

  if (d == 0) {
    arr = [-b/(2*a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d) )/(2*a) , (-b - Math.sqrt(d) )/(2*a)];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  
  let totalAmount;
  



  let creditBody = amount - contribution;
  
  let monthlyPercent = percent / 12 / 100;
  const n = Math.ceil((date - new Date()) / 1000 / 60 / 60 / 24 /30.5);
  
  let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**n) - 1)));
  
  

  
  if (isNaN(percent)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    totalAmount = (Number(contribution) + (monthlyPayment * n)).toFixed(2);
  }
  return totalAmount;
  
}
