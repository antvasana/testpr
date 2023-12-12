"use strict";

let a1 = 7 + 2;
let a2 = 7 - 3;
let a3 = 2 * 4;
let a4 = 4 / 2;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a1, a2, a3, a4);


// Пример №2
// Напишите скрипт, который находит площадь прямоугольника высота 23см.
// (в числовую переменную height), шириной 10см (в числовую переменную width),
// значение площади должно хранится в числовой переменной s. (S=a*b);
let width = 10;
let height = 23;
let s;
s = width * height;
console.log(`S = ${s}`); // окрасилось черным - текст

// Пример №3
// Создайте переменную str и присвойте ей значение 'qwerty'. Обращаясь к отдельным
// символам этой строки выведите на экран символ 'q', символ 'w', символ 'r'.
// let str = 'qwerty';
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[3]);

// Пример №4
// Напишите скрипт, который считает количество секунд в часе.
console.log(60 * 60);

// Пример №5
// Переделайте приведенный код так, чтобы в нем использовались операции
// +=, -=, *=, /=, ++, --.
// Количество строк кода при этом не должно измениться. Код для переделки:
// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;
// console.log(num);


// ДОМАШНЕЕ ЗАДАНИЕ

// Пример №1
// Создайте переменные b1, b2, b3, b4, b5. Поместите в них результат выражений:
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг'
// Результаты переменных вывести в console.log();

let b1 = 5 % 3;
let b2 = 3 % 5;
let b3 = 5 + '3';
let b4 = '5' - 3;
let b5= 75 + 'кг';

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);

// Пример №2
// Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и
// диаметром основания 4м (dC), результат поместите в переменную v.
let heightC = 10;
let dC = 4;
let v;
v = 3.14*(dC/2)*(dC/2) * heightC;
console.log(`V = ${v}`); // окрасилось черным - текст

// Пример №3
// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
// let a = 10;
// let b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// Пример №4
//  Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result.
//  Выведите на экран значение переменной result.
// let c = 15;
// let d = 2;
// let result = c + d;
// console.log(result);

// Пример №5
//  Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
// let a = 10;
// let b = 2;
// let c = 5;
// console.log(a + b + c);

// Пример №6
//  Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c.
//  Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат
//  запишите в переменную result. Выведите на экран значение переменной result.
let a = 17;
let b = 7;
let c = a - b;
let d = 7;
let result = c + d;
console.log(result);

// Пример №7
// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, (Имя)!'.
let name = 'Татьяна';
console.log(`Привет, ${name}!`);

// Пример №8
// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне (Возраст) лет!'.
let age = 38;
console.log(`Мне ${age} лет!`);


// Пример №9
// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
let str = 'abcde';
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);

//Пример №10
// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
console.log(60 * 60);
console.log(60 * 60 * 24);
console.log(60 * 60 * 24 * 30);
console.log(60 * 60, 60 * 60 * 24, 60 * 60 * 24 * 30);


//Пример №11
//Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=.
// Количество строк кода при этом не должно измениться.
// let num = 47;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;

// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// console.log(num);


// Пример №12
// Переделайте этот код так, чтобы в нем использовались операции ++ и --.
// Количество строк кода при этом не должно измениться.
// let num = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;

let num = 10;
num++;
num++;
num--;
console.log(num);



















// console.log(10);
// alert(20);

// let age = 29;
// age = 30;
// console.log(age);

// let age = 29, user = "Andrey", message = 'Hello';
// console.log(age);
// console.log(user);
// console.log(message);

// console.log(1 / 0);
// console.log(Infinity);
// console.log('text' / 2);  // Nan

// let str = "Привет";
// let str1 = 'Hello';
// let str2 = `Hi`;
// console.log(str);
// console.log(str);
// console.log(str1);
// console.log(str1);
// console.log(str2);

// let str2 = `Hi - ${str}`;
// console.log(str2);
// let str3 = 'HI' + '' + '-' + '' + str;
// console.log(str3);
// let str4 = `Hi - ${1+2}`;
// console.log(str4);

// let nameChecked = true;
// let ageChecked = false;
// console.log(nameChecked);
// console.log(ageChecked);
// console.log(2 < 1);

// let age;
// console.log(age);

// typeof undefined;

// alert('hello');

// let result = prompt('Text');
// let age = prompt('Сколько тебе лет?', 28);
// alert(`Тебе ${age} лет!`);

// let result = confirm("question");

// let result = confirm('Тебя зовут Андрей?');
// alert(result);

// console.log(2 * 3);
// let i = 2;
// i = -i;
// console.log(i);

// let x = 2, y = 3;
// console.log(y - x);

// console.log(5 % 2);
// console.log(2 ** 3);

// console.log(4 ** (1 / 2));

// let text = 3 * "2";
// console.log(text);  //6

// let number = 3 + "4";
// console.log(number);

// let x = true;
// console.log(+x);  // 1

// let x = "1";
// let y = "2";
// console.log(x + y);  // 12
// console.log(+x + +y);  // 3

// let counter = 4;
// counter++;
// console.log(counter);  //5

// let counter2 = 7;
// ++counter2;
// console.log(counter2);  //8

// let counter = 2;
// let a = counter++;
// console.log(a);  //2

// let counter2 = 2;
// let b = ++counter2;
// console.log(b);  //3

// let counter = 2;
// // console.log(2 * ++counter);  //6
// console.log(2 * counter++);  //4
// console.log(2* counter++);  //6

// let a = (1 + 2, 3 + 4);
// console.log(a);  //7

// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// let currentUser = null;
// let defaultUser = "Andrey";
// let name = currentUser || defaultUser || "unamed";
// console.log(name);  //Andrey

// let x;
// true || (x = 1);
// console.log(x);  //undefined

// let x;
// true || (x = 1);
// console.log(x);  //1

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// let hour = 12;
// let minute = 30;
// if (hour == 12 && minute == 30) {
//   console.log('Сейчас 12:30');
// }


// console.log(!true); //false

// console.log(!!null); //false
// console.log(!!"Text");  //true
 




