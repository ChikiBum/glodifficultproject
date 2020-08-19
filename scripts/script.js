'use strict';

const getDateTime = function(){
const now = new Date(),
    dayOfWeek = now.getDay(),
    nowMonth = now.getMonth(),
    olElem = document.getElementById('olElement'),
    divElement = document.getElementById('div2-Element');

    let Day;
    switch ( dayOfWeek ) {
      case 1 : Day = 'Понедельник';
        break;
      case 2 : Day = 'Вторник';
        break;
      case 3 : Day = 'Среда';
        break;
      case 4 : Day = 'Четверг';
        break;
      case 5 : Day = 'Пятница';
        break;
      case 6 : Day = 'Суббота';
        break;
      case 7 : Day = 'Воскресенье';
        break;}

    let month;
    switch ( nowMonth ) {
      case 0 : month = 'Января‎';
        break;
      case 1 : month = 'Февраля‎';
        break;
      case 2 : month = 'Март‎а';
        break;
      case 3 : month = 'Апреля';
        break;
      case 4 : month = 'Мая';
        break;
      case 5 : month = 'Июня';
        break;
      case 6 : month = 'Июля';
        break;
      case 7 : month = 'Августа';
        break;
      case 8 : month = 'Сентября';
        break;
      case 9: month = 'Октября';
        break;
      case 10: month = 'Ноября';
        break;
      case 11: month = 'Декабря';
        break;}

    let hourName;
    const getHourName = function(n){
      if (n >= 1 && n <= 4 || n >= 22 && n <= 24){
        return 'часа';
      } else if (n >= 5 && n <= 20 || n === 0){
        return 'часов';
      }
      else {
        return 'час';
      }
    }; 

    let minuteName;
    const getMinuteName = function(m){
      if (m === 1 || m === 21 || m === 31 || m === 41 || m === 51){
        return 'минута';
      } else if (m >= 2 && m <= 4 || m >= 12 && m <= 14 || m >= 22 && m <= 24 || m >= 32 && m <= 34 || m >= 42 && m <= 44 || m >= 52 && m <= 54){
        return 'минуты';
      }
      else {
        return 'минут';
      }
    }; 

    let secondName;
    const getSecondName = function(s){
      if (s === 1 || s === 21 || s === 31 || s === 41 || s === 51){
        return 'секунда';
      } else if (s >= 2 && s <= 4 || s >= 12 && s <= 14 || s >= 22 && s <= 24 || s >= 32 && s <= 34 || s >= 42 && s <= 44 || s >= 52 && s <= 54){
        return 'секунды';
      }
      else {
        return 'секунд';
      }
    }; 


    hourName = getHourName(now.getHours());
    minuteName = getMinuteName(now.getMinutes());
    secondName = getSecondName(now.getSeconds());

      olElem.textContent = `Сегодня ${Day}, ${now.getDate()} ${month} ${now.getFullYear()} года, 
    ${now.getHours()} ${hourName} ${now.getMinutes()} ${minuteName} ${now.getSeconds()} ${secondName}`;

    const getZero = function(n){
      if(n <= 9){
        return '0' + n;
      } else {
        return n;
      }
    };

    divElement.textContent = `${getZero(now.getDate())}.${getZero(now.getMonth())}.${now.getFullYear()} -  
    ${getZero(now.getHours())}.${getZero(now.getMinutes())}.${getZero(now.getSeconds())}`;

   };

  setInterval(getDateTime, 1000);

  // console.log(now);
  // console.log('now.getTime() :', now.getTime());
  // console.log('now.getFullYear() :', now.getFullYear());
  // console.log('now.getMonth() :', now.getMonth());
  // console.log('now.getDate() :', now.getDate());
  // console.log('now.getHours() :', now.getHours());
  // console.log('now.getMinutes() :', now.getMinutes());
  // console.log('now.getDay() :', dayOfWeek);