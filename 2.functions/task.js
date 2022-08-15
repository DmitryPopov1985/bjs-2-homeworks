// Задание 1
function getArrayParams(arr) {
  let min = arr[0],
      max = arr[0],
      sum = 0,
      avg;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } 

    if(arr[i] < min) {
      min = arr[i]
    } 

    sum += arr[i];
    avg = Number((sum / arr.length).toFixed(2));
   }

      return { min, max, avg };
  }

  


// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  
  for (let i = 0; i < arrOfArr.length; i++) { 
    if(func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }  
  }
   
  return max;
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } 

    if(arr[i] < min) {
      min = arr[i]
    } 
  }
  return Math.abs(max - min);
}
