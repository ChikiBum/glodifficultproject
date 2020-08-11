'use strict';

let charLine = prompt('Введите строчку', 'это строка');
  
let inputLine = function(line){
    let trimLine;
    if (line !== null){
       trimLine = line.trim(); 
    }
    
    if(typeof(line) !== 'string' || line === null ){
        return(typeof(line) + ' - это HE строка!');
    } else if (trimLine.length > 30){
        return(trimLine.slice(0, 31) + '...');
    } else {
    return(trimLine);
    }
};

console.log(inputLine(charLine));
