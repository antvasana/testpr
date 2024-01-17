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

// let user = {
//   name: 'Andrey',
//   age: 28,
//   eyescolor: 'grey'
// };
// // user.name = 'Ivan';
// user.height = 182;
// delete user.age;

// console.log(user);


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

// let taxi = {
//   make: 'Webville Motors',
//   model: 'Taxi',
//   year: 1990,
//   color: 'yellow',
//   passenger: 4,
//   milage: 28000,
//   started: true,
//   start: function () {
//     this.started = true;
//   },
//   stop: function () {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       console.log('Врум...врум...врум');
//     } else {
//       console.log('Заведи мотор');
//     }
//   }
// };
// taxi.drive();


// 4.01.24 Урок 16. Массивы

// let cars = ['BMW', 'Audi', 'Toyota'];
// cars[2] = 'Газель';
// console.log(cars[2]); //Газель
// console.log(cars);


// let user = {
//   name: 'Andrey',
//   lastName: 'Makeenko',
//   age: 28
// };

// let user = ['Andrey', 'Makeenko', 28];
// console.log(user.length);  // 3
// user.push(180);
// console.log(user); // (4) ['Andrey', 'Makeenko', 28, 180]

// console.log(user.toString());  // Andrey,Makeenko,28
// console.log(user.join(" +  "));  // Andrey +  Makeenko +  28

// user.pop();
// console.log(user); // (2) ['Andrey', 'Makeenko']

// console.log(user.pop()); // 28

// user.push(180);
// console.log(user); // (4) ['Andrey', 'Makeenko', 28, 180]

// user.shift();
// console.log(user); // (2) ['Makeenko', 28]

// user.unshift(180);
// console.log(user); // (4) [180, 'Andrey', 'Makeenko', 28]

// delete user[0];
// console.log(user); // (4) [пусто, 'Andrey', 'Makeenko', 28]

// user.splice(2, 0, 180, 8);
// console.log(user);

// let user = ['Andrey', 'Makeenko', 28];
// let user1 = ['Vika', 'Makeenko', 28];
// let user2 = ['Mark', 'Makeenko', 1];

// let family = user.concat([180, 35]);
// console.log(family); // (6) ['Andrey', 'Makeenko', 28, 'Vika', 'Makeenko', 28]

// let user = ['Andrey', 'Makeenko', 28];
// let user1 = user.slice(1);
// console.log(user1); // (2) ['Makeenko', 28]

// let user1 = user.slice(1, 2);
// console.log(user1); // ['Makeenko']

// let user = ['Makeenko', 'Andrey', 28];
// console.log(user.sort()); // (3) [28, 'Andrey', 'Makeenko']

// let user = ['Makeenko', 28, 'Andrey'];
// user.sort();
// console.log(user); // (3) [28, 'Andrey', 'Makeenko']
// user.reverse();
// console.log(user); // (3) ['Andrey', 28, 'Makeenko']

// let number = [2, 100, 25, 12, 45];

// number.sort(function (a, b) {
//   return a - b;
// });
// console.log(number); // (5) [2, 12, 25, 45, 100]

// number.sort(function (a, b) {
//   return b - a;
// });
// console.log(number); // (5) [100, 45, 25, 12, 2]

// number.sort(function (a, b) {
//   return 0.5 - Math.random();
// });
// console.log(number);

// function change(x) {
//   x = 2 * x;
//   console.log('x  change:', x);
// }
// let y = 2;
// console.log('y до change:', y);
// change(y);
// console.log('y после change:', y); // y до change: 2
//  x  change: 4
//  y после change: 2

// function change(user) {
//   user.name = "Anna";
// }
// let andrey = {
//   name: 'Andrey'
// };
// console.log('до change:', andrey.name);
// change(andrey);
// console.log('после change:', andrey.name);  //до change: Andrey
// после change: Anna

// function change(user) {
//   user = {
//     name: 'Anna'
//   };
// }
// let andrey = {
//   name: 'Andrey'
// };
// console.log('до change:', andrey.name);
// change(andrey);
// console.log('после change:', andrey.name); // до change: Andrey
// после change: Andrey

// function change(array) {
//   array[0] = 8;
// }
// function changeFull(array) {
//   array = [4, 5, 6];
// }
// let numbers = [1, 2, 3];
// console.log('до change:', numbers);
// change(numbers);
// console.log('после change:', numbers);
// changeFull(numbers);
// console.log('после changeFull:', numbers);  // до change: (3) [1, 2, 3]
// после change: (3) [8, 2, 3]
// после changeFull: (3) [8, 2, 3]

// let log = function(a, b, c) {
//   console.log(a, b, c);
// };
// log(...['spread', 'rest', 'operator']); // spread rest operator
// log.apply(null, ['spread', 'rest', 'operator']); // spread rest operator

// let arr = ['will', 'love'];
// let arr2 = ['You', ...arr, 'spread', 'operator'];
// console.log(arr2); // (5) ['You', 'will', 'love', 'spread', 'operator']

// let arr = ['will', 'love'];
// let arr2 = [...arr];
// console.log(arr2); // (2) ['will', 'love']

// let birthday = new Date(1993, 6, 8);
// console.log(birthday); // Thu Jul 08 1993 00:00:00 GMT-0400 (Венесуэла)

// let birthday = [1993, 6, 8];
// let day = new Date(...birthday);
// console.log(day); // Thu Jul 08 1993 00:00:00 GMT-0400 (Венесуэла)
// console.log(birthday); // (3) [1993, 6, 8]

// let log = function (a, b, ...rest) {
//   console.log(a, b, rest);
// };
// log('Andrey', 'rest', 'spread', 'user'); //['spread', 'user']0: "spread"1: "user"length: 2[[Prototype]]: Array(0)

// let log = function (...args) {
//   console.log(args);
// };
// log(1, 2, 3, 4, 5);  // (5) [1, 2, 3, 4, 5]


// 9.01.24 Урок 18. Основы ООП

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
//   getFullName() {
//     return this.firstName + ' ' + this.lastName
//   }
// }
// let person = new Person('Andrey', 'Makeenko');
// // console.log(person.getFullName());  // Andrey Makeenko
// console.log(person.firstName);  // Andrey


// 14.01.24 Урок 19. Практика - Работа с объектами

// 1. Используя литерал объекта создайте пустой объект cat.
// Добавьте свойство name со значением "Roxy".
// Добавьте свойство lags со значением 4.
// Добавьте свойство color со значением "grey".
// Добавьте свойство full name со значением "Roxy, красивая кошка".
// Выведите full name через console.log().
// let cat = {};
// cat.name = "Roxy";
// cat.lags = 4;
// cat.color = "grey";
// cat["full name"] = "Roxy, красивая кошка";
// console.log(cat["full name"]);  // Roxy, красивая кошка
// console.log(cat); // {name: 'Roxy', lags: 4, color: 'grey', full name: 'Roxy, красивая кошка'}
// [[Prototype]]: Object
// console.log(cat.color); // grey


// 2. Напишите функцию-конструктор Person, которая принимает два параметра:
// name (имя) и age (возраст).
// С помощью оператора new создайте объект person_1, передающий в
// функцию-конструктор аргументы: имя "Andrey" и возраст 28.
// Выведите свойства объекта person_1 через console.log().
// Добавьте к шаблону объекта Person свойство specialty с помощью
// prototype. Значением свойства будет "менеджер".
// Выведите свойство specialty объекта person_1 через console.log().

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// let person_1 = new Person('Andrey', 28);
// console.log(person_1.name);
// console.log(person_1.age);
// console.log(person_1);

// Person.prototype.specialty = "менеджер";
// console.log(person_1.specialty);

// 3. Используя литерал объекта создайте объект cat с тремя свойствами:
// name, legs и color.
// С помощью Object.create() создайте объект kitten
// объектом-прототипом которого будет cat.
// Выведите свойства объекта kitten через console.log().

// let cat = {
//     legs:4,
//     name : 'Roxy',
//     color: 'grey'
// }
// let kitten = Object.create(cat);
// console.log(kitten.name);  //Roxy
// console.log(kitten.legs);  // 4
// console.log(kitten.color); // grey

// 4. Реализуйте класс Worker (Работник), который будет иметь следующие
// свойства: name (имя), surname (фамилия), rate (ставка за день работы),
// days (количество отработанных дней). Также класс должен иметь метод
// getSalary(), который будет выводить зарплату работника. Зарплата -
// это произведение (умножение) ставки rate на количество отработанных
// дней days.

// class worker{
//     constructor(name, surname, rate,days){
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary() {
//         return this.rate * this.days;
//     }
// }
// worker = new worker('Andrey', 'Makeenko', 100, 21);
// console.log(worker.name); // Andrey
// console.log(worker.surname);  // Makeenko
// console.log(worker.getSalary()); // 2100

// 15.01.24 Урок 19. Практика - Работа с объектами, дз

// 1. Создайте объект city1 (var city1 = {}), укажите у него свойства name
// (название города, строка) со значением «ГородN» и population
// (населенность города, число) со значением 10 млн.

// let city1 = {};
// city1.name = 'ГородN';
// city1.population = 10000000;
// console.log(city1.name); // ГородN
// console.log(city1.population); // 10000000

// 2. Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.

// let city2 = {
//     name: "ГородM",
//     population: 1e6
// }
// console.log(city2.name); // ГородM
// console.log(city2.population); // 1000000

// 3. Создайте у объектов city1 и city2 методы getName(), которые вернут
// соответствующие названия городов.

class City {
    constructor(name, population) {
        this.name = name;
        this.population = population;
    }
    getName() {
        return this.name;
    }
}
let city1 = new City('ГородN', 10000000);
let city2 = new City('ГородM', 1000000);
console.log(city1.getName()); // ГородN 
console.log(city2.getName());  // ГородM

// 6. Создайте массив d1 с числовыми величинами 45,78,10,3.
// Добавьте в массив d1 еще одно число ( d1[7] = 100).
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.

let d1 = [45, 78, 10, 3];
d1[7] = 100;

console.log(d1);  // (8) [45, 78, 10, 3, empty × 3, 100]
console.log(d1[6], d1[7]);  // undefined 100
console.log(d1[0], d1[7]);  // 45 100
console.log(d1[6]);  // undefined

// 7. Создайте массив d2 с числовыми величинами 45,78,10,3. 
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for.

let d2 = [45, 78, 10, 3];
let sum2 = 0;

for (let i = 0; i <= d2.length - 1; i++) {
    sum2 += d2[i];
}
console.log(sum2); // 136


//8. Создайте массив d3 с числовыми величинами 45,78,10,3.
// Добавьте в массив d3 еще одно число (например, d[7] = 100)
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.

let d3 = [45, 78, 10, 3];
d3[7] = 100;

let sum3 = 0;

for (let i = 0; i <= d3.length - 1; i++) {
    sum3 += d3[i];
}
console.log(sum3); // NaN


// 9.  Создайте массив d4 с числовыми величинами 45,78,10,3.
// Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my)
// отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my)

let d4 = [45, 78, 10, 3];
d4[7] = 100;

d4.sort(function (a, b) {
    return b - a;
});
console.log(d4); // (8) [100, 78, 45, 10, 3, empty × 3]




