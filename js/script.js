'use strict';



function number() {

  function getRandom(){
    return Math.floor(Math.random() *(100 - 1) + 1);
  }

  let a = getRandom();
  console.log(a);
  chislo();

  function chislo(){
    
    let b = prompt("Угадай число от 1 до 100");

    if(b === null){
      return (alert("Игра окончена"));
    }else if(isNaN(b) || b.trim() === ''){
      alert("Введи число!");
      return   chislo();
    }else if(b<a){
      alert("Загаданное число больше")
      return   chislo();
    }else if(b>a){
      alert("Загаданное число меньше");
      return   chislo();
    }else if(b === a){
      return (alert("Поздравляю, Вы угадали"));
    }
    
    }
  
}

number();

