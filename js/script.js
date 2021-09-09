'use strict';



function number() {

  let chisloTry = 10;

  function start(){

    if(chisloTry == 0){
      --chisloTry;
      chislo(chisloTry);
    }
    else if( chisloTry > 0){
      --chisloTry;
     return chislo(chisloTry);
    }
    
  }

  function getRandom(){
    return Math.floor(Math.random() *(100 - 1) + 1);
  }

  
  start();

  function chislo(chislo){
    let a = getRandom();
    let b = prompt("Угадай число от 1 до 100");

    if(b === null){
      alert("Игра окончена");
      return false;
    }else if(b == a ){
      confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?") ? number() : alert("Спасибо что были с нами :)");
    }else if(chislo <= 0){
          confirm("Попытки закончились, хотите сыграть еще?") ? number() : alert("Спасибо что были с нами :)");
    }else if(isNaN(b) || b.trim() === ''){
        alert("Введи число!");
        return   start();
    }else if(b < a){
        alert("Загаданное число больше, осталось попыток " + chislo);
    }else{
      alert("Загаданное число меньше, осталось попыток " + chislo);
    }
    return start();
  }
  
  
  
  
  
  
  // function chislo(chislo){

  //   let a = getRandom();
    
  //   let b = prompt("Угадай число от 1 до 100");

  //   if(b == a ){
  //     confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?") ? number() : alert("Спасибо что были с нами :)");
  //   }else if(b === null){
  //     return (alert("Игра окончена"));
  //   }else if(isNaN(b) || b.trim() === ''){
  //     alert("Введи число!");
  //     return   start();
  //   }else if(b<a && chislo > 0){
  //     alert("Загаданное число больше, осталось попыток " + chislo);
  //     return   start();
  //   }else if(b>a && chislo > 0){
  //     alert("Загаданное число меньше, осталось попыток " + chislo);
  //     return   start();
  //   }else{
  //     confirm("Попытки закончились, хотите сыграть еще?") ? number() : alert("Спасибо что были с нами :)");
  //   }
    
  // }

  
  
}

number();

