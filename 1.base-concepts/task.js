"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
<<<<<<< HEAD
  let d = b**2-4*a*c;

  if (d == 0) {
=======
  let d;
  d = b**2-4*a*c;

  if (d < 0) {
    arr = [];
  } else if (d == 0) {
>>>>>>> d2309092c682db50ca7196d9cdaf9f4c4e159137
    arr = [-b/(2*a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d) )/(2*a) , (-b - Math.sqrt(d) )/(2*a)];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  
  let totalAmount;
  
<<<<<<< HEAD



=======
  
  isNaN(percent) ? alert('`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`') : Number(percent);
  isNaN(contribution) ? alert('`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`') : Number(contribution);
  isNaN(amount) ? alert('`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`') : Number(amount);


>>>>>>> d2309092c682db50ca7196d9cdaf9f4c4e159137
  let creditBody = amount - contribution;
  
  let monthlyPercent = percent / 12 / 100;
  const n = Math.ceil((date - new Date()) / 1000 / 60 / 60 / 24 /30.5);
  
  let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**n) - 1)));
  
<<<<<<< HEAD
  

  
  if (isNaN(percent)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    totalAmount = (Number(contribution) + (monthlyPayment * n)).toFixed(2);
  }
=======
  totalAmount = (Number(contribution) + (monthlyPayment * n)).toFixed(2);
>>>>>>> d2309092c682db50ca7196d9cdaf9f4c4e159137
  return totalAmount;
  
}
