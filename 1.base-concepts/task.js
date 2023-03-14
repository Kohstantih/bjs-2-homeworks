"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d) ) / (2 * a));
  };
  return arr;
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    return false;
  }; 
    let S = amount - contribution, P = (percent / 100) / 12, n = countMonths;
    let monthPay = S * (P + (P / (((1 + P)**n) - 1)));
    let sum = Number((n * monthPay).toFixed(2));
    return sum;  
};