'use strict';

const div = document.getElementById('animation'),
    doAnimation = document.getElementById('do-animation'),
    stopAnimation = document.getElementById('stop-animation');

   

    let left = 0,
        requestId ;

    const move = () => {
   
        left += 5;
      
        div.setAttribute('style', `position: absolute; top: 0; left: ${left}px`);
       
        requestId = requestAnimationFrame(move);
         
        if(left > window.innerWidth){
            left = 0;
           cancelAnimationFrame(requestId);
           requestId = requestAnimationFrame(move);
        }
    };

    let animate = true;

    const stop = () => {
       cancelAnimationFrame(requestId) ;
       div.setAttribute('style', `position: absolute; top: 0; left: 0`);
       animate = true;
       left = 0;
    };

    
    doAnimation.addEventListener('click', () => {
        if(animate){
            requestId = requestAnimationFrame(move);
            animate = false;
        }  else {
            cancelAnimationFrame(requestId);
            animate = true;
        }
    });

    stopAnimation.addEventListener('click', stop);


