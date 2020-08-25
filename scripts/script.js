'use strict';

const changeBtn = document.getElementById('change'),
    h1Color = document.getElementById('color'),
    wrapper = document.getElementsByClassName('wrapper') ;

 
    const getRandomNuber = function (){
        return Math.floor(Math.random() * (256));
    };

    const changeColor = function(e){
        const r = getRandomNuber().toString(16),
            g = getRandomNuber().toString(16),
            b = getRandomNuber().toString(16);
         
        h1Color.textContent = '#' + r + g + b;
        wrapper[0].setAttribute('style', `background-color: #${r}${g}${b};`);

    };

    changeBtn.addEventListener('click', changeColor);