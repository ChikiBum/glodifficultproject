'use strict';

/*1) Создать массив arr = []
— Записать в него 7 любых многозначных чисел в виде строк
— Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)*/

let arr  = [];
let arr2  = [];

arr.push('2345', '345345', '43445', '634234', '2278678', '1231');

const arrResMap = arr.map(function(num){
 
 if (num[0] === '2' || num[0] === '4'){
 return num;
 }
}); 

const arrResFilter = arrResMap.filter(function(x) {
    return x !== undefined; 
});

console.log(arr);
console.log(arrResMap);
console.log(arrResFilter);

/*2) Вывести в столбик все простые числа от 1 до 100
    — Статья про простые числа 
    — Рядом с каждым числом написать оба делителя данного числа
    Например: “Делители этого числа: 1 и n”*/


// goLable:
// for (let i = 2; i <= 100; i++) { 

//   for (let j = 2; j < i; j++) { 
//     if (i % j === 0) 
//     {continue goLable;} 
//   }

//   console.log('Простое число: ', i, 'Делители этого числа: 1 и ', i );  
// }

let startNumber = +prompt('Eneter startNumber', 2),
    endNumber = +prompt('Eneter endNumber', 10);

const naturalNumber = function(startNumber, endNumber, callback){
  if (startNumber > 1 && startNumber < endNumber) {
    for (let i = startNumber; i <= endNumber; i++) { 
      callback(i);
    }
    }
   else {
      return 'startNumber may by more that 1 and startNumber > endNumber';
  }
};

const naturalNumberInside = function(n){
  for (let j = startNumber; j <= n; j++){
    if (j === n){
      arr2.push(`Простое число: ${n} Делители этого числа: 1 и ${n}`);
    } else if (n % j === 0)
    {return;}
  }
};

const result = naturalNumber(startNumber, endNumber, naturalNumberInside);
    if (result === undefined) {
      for (let i = 0; i < arr2.length; i++){
        console.log(arr2[i]);
      }
    } else {
console.log(result);
}
