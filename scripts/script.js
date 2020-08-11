'use strict';

let lang,
    arrDays = ['ru', ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'], 
    'en', ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']],
    indexLang,
    namePerson;

    lang = prompt('Choose language RU or EN', 'ru').toLowerCase();
    namePerson = prompt('Enter Name', 'Артем').toLowerCase();

    console.group('------------- Переменная lang может принимать 2 значения: ru en. через if-----------------');
    if (lang === 'ru'){
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    } 
    else if (lang === 'en'){
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    }
    else {
        console.log('Wrong language. Choose language RU or EN');
    }
    console.groupEnd();    
    

    console.group('------------- через switch-case -----------------');
    
    switch(lang){
        case 'ru': console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
            break;
        case 'en': console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
            break;
        default: console.log('Wrong language. Choose language RU or EN');
    }
    
    console.groupEnd();


    console.group('------------- через многомерный массив без ифов и switch. -----------------');
    
    indexLang = arrDays.indexOf(lang);
    console.log(arrDays[indexLang + 1][0]);
    
    console.groupEnd();


    console.group('------------- У нас есть переменная namePerson -----------------');
    
    namePerson === 'артем' ? console.log('директор') : 
    namePerson === 'максим' ? console.log('преподаватель') :  console.log('студент');

    console.groupEnd();


