let num  = 266219,
    numToString,
    multiply = 1 ; 
        
    console.group('-------------Вывести в консоль произведение (умножение) цифр этого числа-----------------');

    numToString = num + '';

    for (let i = 0; i < numToString.length; i++)
    {
        multiply = multiply * numToString[i];
        
    }

    console.log( `Multiply numbers in a number ${num} is ${multiply}`);
    console.groupEnd();
    
    console.group('------------- Полученный результат возвести в степень 3 не Math.pow)-----------------');
    console.log( `А number ${multiply} in power 3 is ${multiply**3}`);
    console.groupEnd();

    console.group('------------- Полученный результат возвести в степень 3 не Math.pow)-----------------');
    console.log( `Fist two numbers of ${num} are ${numToString.slice(0,2)}` );
        console.groupEnd();    
    



