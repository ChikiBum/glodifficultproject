'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], 
    weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    now = new Date(),
    dayOfWeek = now.getDay(),
    olElem = document.getElementById('olElement');
    
    delete week[dayOfWeek-1];

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

  for (let value of week){
  if ( value === 'Суббота' || value === 'Воскресенье'){
  olElem.insertAdjacentHTML('beforeend', `<li style="font-style: italic">${value}</li>`);
  } else if (value === undefined){
    if ( Day === 'Суббота' || Day === 'Воскресенье'){
      olElem.insertAdjacentHTML('beforeend', `<li style="font-style: italic; font-weight: bold">${Day}</li>`);
      } else {
    olElem.insertAdjacentHTML('beforeend', `<li style="font-weight: bold">${Day}</li>`);
      }
  } else {
    olElem.insertAdjacentHTML('beforeend', `<li>${value}</li>`);
  }
 }
