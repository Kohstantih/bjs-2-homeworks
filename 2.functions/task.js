function getArrayParams(...arr) {
  let min = Infinity, max = -Infinity, sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    };
    if (arr[i] > max) {
      max = arr[i];
    };
    sum += arr[i];    
  };
  let avg = Number((sum / arr.length).toFixed(2))
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
};

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let dif = Math.max.apply(null, arr) - Math.min.apply(null, arr);
  return dif;
};

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let sumEvenElement = 0, sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    };    
  };
  let dif = sumEvenElement - sumOddElement;
  return dif;
};

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let sumEvenElement = 0, countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++ 
    };
  };
  let avg = sumEvenElement / countEvenElement;
  return avg;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    };        
  };
  return maxWorkerResult;
};
