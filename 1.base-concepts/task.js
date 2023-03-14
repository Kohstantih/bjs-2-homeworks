"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d;
  d = b**2 - 4 * a * c;
  if (d < 0) {
    
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d) ) / (2 * a));
  };
  return arr;
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    return false
  } else {
    let S, P, n, monthPay, sum;
    P = (percent / 100) / 12;
    S = amount - contribution;
    n = countMonths;
    monthPay = S * (P + (P / (((1 + P)**n) - 1)));
    sum = Number((n * monthPay).toFixed(2));
    return sum;
  };
};