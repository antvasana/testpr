'use strict';

// 28.12.23 Callback функция

// function one() {
//   console.log('one');
// }

// function two() {
//   console.log('two');
// }
// one();
// two();  // one two

// function one() {
//   setTimeout(function(){
//     console.log('one');
//   }, 1000);
  
// }
// function two() {
//   console.log('two');
// }
// one();
// two();  //two
// one
       
// function test(subject, callback) {
//   console.log(`Начало написания теста по предмету: ${subject}`);
//   callback();
// }

// test('физика', function () {
//   console.log(`Окончание теста`);
// });

// function test(subject, callback) {
//   console.log(`Начало написания теста по предмету: ${subject}`);
//   callback();
// }

// function finish() {
//   console.log(`Окончание теста`);
// }

// test('физика', finish);

// 2.01.24 Урок 15. Объекты

let user = {
  name: 'Andrey',
  age: 28,
  eyescolor: 'grey'
};
// user.name = 'Ivan';
user.height = 182;
delete user.age; 

console.log(user);


// let fiat = {
//   age: 5,
//   needWashing: true,
//   color: 'red'
// };

// console.log(fiat.color);

// let taxi = {
//   make: 'Webville Motors',
//   model: 'Taxi',
//   year: 2001,
//   color: 'yellow',
//   passenger: 4,
//   milage: 9000
// };

// function prequal(car) {
//   if (car.milage > 10000) {
//     return false;
//   } else if (car.year > 2000) {
//     return false;
//   }
//   return true;
// }


// let wortALook = prequal(taxi);
// if (wortALook) {
//   console.log(`Ты должен это всё проверить ${taxi.make} ${taxi.model}`);
// } else {
//   console.log(`Вы действительно должны проверить ${taxi.make} ${taxi.model}`);
// }

let taxi = {
  make: 'Webville Motors',
  model: 'Taxi',
  year: 1990,
  color: 'yellow',
  passenger: 4,
  milage: 28000,
  started: true,
  start: function () {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      console.log('Врум...врум');
    } else {
      console.log('Заведи мотор');
    }   
  }
};
taxi.drive();
