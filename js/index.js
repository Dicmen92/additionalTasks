'use strict';

class First {
  hello(){
    console.log('Привет, я метод консоля!');
  }
};

class Second extends First{
  hello(){
    super.hello();
    console.log('А я наследуемый метод!');
  }  
};

const check = new Second();
check.hello();