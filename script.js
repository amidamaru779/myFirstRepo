let title = "My first project on Java Script."
// строка с названием проекта
let screens = "Простые, Сложные, Интерактивные"
// строка с названием экранов
let screenPrice = 12
// любое число
let rollback = 95
// любое число от 1 до 100
let fullPrice = 150
// сколько бы хотел зарабатывать
let adaptive = true
// булевое значение

console.log(typeof title);
// вывел значение переменной (str)
console.log(typeof fullPrice);
// вывел значение переменной (num)
console.log(typeof adaptive);
// вывел значение переменной (boolean)

console.log(screens.length);
// вывел в консоль длину строки переменной

console.log("Стоимость верстки экранов", screenPrice, "рублей/долларов/гривен/юани \n"+"Стоимость разработки сайта",fullPrice,"рублей/долларов/гривен/юани"
 ); // вывел стоимость верстки экранов и разработки сайта

screens = screens.toLowerCase()
// поменял всю строку в нижний регистр
screens = screens.split(" ")
// сделал массив из строки
console.log(screens);
// вывод массива в нижнем регистре

console.log(fullPrice * (rollback/100));
// вывел в консоль процент отката посреднику за работу
