'use strict';



function number() {

  let a = 5;

  let b = prompt("Угадай число от 1 до 100");

  if(b<a && b != null){
    return (alert("Загаданное число меньше"), number());
  }else if(b>a){
    return (alert("Загаданное число больше"), number());
  }else if(isNaN(b) || b && b.trim() === ''){
    return (alert("Введи число!"), number());
  }else if(b === null){
    return (alert("Игра окончена"));
  }else{
    return (alert("Поздравляю, Вы угадали"));
  }

  
}

number();

