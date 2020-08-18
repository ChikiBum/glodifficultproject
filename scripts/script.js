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
        case 1 : month = 'Января‎';
          break;
        case 2 : month = 'Февраля‎';
          break;
        case 3 : month = 'Март‎а';
          break;
        case 4 : month = 'Апреля';
          break;
        case 5 : month = 'Мая';
          break;
        case 6 : month = 'Июня';
          break;
        case 7 : month = 'Июля';
          break;
        case 8 : month = 'Августа';
          break;
        case 9 : month = 'Сентября';
          break;
        case 10 : month = 'Октября';
          break;
        case 11 : month = 'Ноября';
          break;
        case 12 : month = 'Декабря';
          break;}

    let HourName;
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

    HourName = getHourName(now.getHours());

    olElem.textContent = `Сегодня ${Day}, ${now.getDate()} ${month} ${now.getFullYear()} года, 
    ${now.getHours()} ${HourName} ${now.getMinutes()} минут ${now.getSeconds()} секунды`;

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