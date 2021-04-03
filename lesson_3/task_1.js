// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

function prime(n){
    if (n < 2) return false;
    for (let i = 2 ; i <= Math.sqrt(n); i++){
        if (n % i == 0) return false;
    }
    return true;
}

let n = 0

 while (n <= 100) {
  if (prime(n)) console.log(n);
  n++;    
 }
