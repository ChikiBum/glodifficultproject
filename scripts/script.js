"use strict";

const wrapper = document.querySelector('.wrapper');


function DomElement(selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = 'absolute';
  this.top = 0;
  this.left = 0;
  }
  
  DomElement.prototype.createElement = function(){
     if (this.selector[0] === '.'){
           if (document.querySelector('.block')){
            const el = document.querySelector('.block');
            el.parentNode.removeChild(el);
           }
      const arr = this.selector.split(''),
                 className = arr.splice(1, arr.length);
      const div = document.createElement('div');
            div.classList.add(className.join(''));
            div.textContent = 'Its DIV element';
            wrapper.append(div);
            div.setAttribute('style', `height:${this.height}px; width:${this.width}px; 
            background-color:${this.bg}; font-size:${this.fontSize}em; position: ${this.position};
            top: ${this.top}px; left: ${this.left}px`);
      } 
  };

const newElement1 = new DomElement('.block', 100, 100, '#FF9', 1);

newElement1.createElement();


DomElement.prototype.moveElement = function(event) {
      const block = document.querySelector('.block');
      if (event.code === 'ArrowRight'){
            screen.width - this.width > this.left ? this.left += 5 : alert('End of screen');
            newElement1.createElement();
      } else if (event.code === 'ArrowLeft'){
            this.left > 0  ? this.left -= 5 : alert('End of screen');
            newElement1.createElement();
      } else if (event.code === 'ArrowUp'){
            this.top > 0  ? this.top -= 5 : alert('End of screen');
            newElement1.createElement();
      } else if (event.code === 'ArrowDown'){
            screen.height - this.height > this.top ? this.top += 5 : alert('End of screen');
            newElement1.createElement();
      }
  };

document.addEventListener('keydown', newElement1.moveElement.bind(newElement1));

