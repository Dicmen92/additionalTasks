'use strict';

class DomElement {
  constructor(
    selector = "#div",
    height = "400px",
    width = "400px",
    bg = "green",
    fontSize = "24px"
  ) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }
};

DomElement.prototype.createElem = function () {
  let block;
    this.selector.trim().slice(0, 1) == "." ? 
    block = document.createElement("div") : 
    this.selector.trim().slice(0, 1) == "#" ? 
    block = document.createElement("p") :
    alert("Необходимо начинать строку с '.' или '#' ");

  (this.selector.charAt(0) == '.') ? block.setAttribute('class', this.selector.slice(1)) : block.setAttribute('id', this.selector.slice(1));

  block.textContent = "Обязательное задание урока №14 (часть первая)";  
  block.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: center;`;
  document.body.append(block);
};

const domBlock = new DomElement("#best", "200px", "auto", "red", "30px");

domBlock.createElem();