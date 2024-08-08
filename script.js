'use strict';

// задаём вопросы пользователю о проекте
let title = prompt("Как называется ваш проект?")
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
let screenPrice = +prompt("Сколько будет стоить данная работа?",  "12000")
let adaptive = confirm("Нужен ли адаптив на сайте?")
let service1 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice1 = +prompt("Сколько это будет стоить?")
let service2 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice2 = +prompt("Сколько это будет стоить?")
let rollback = 95
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let servicePercentPrice = Math.ceil(fullPrice - (rollback/100))

//создал условия для проверки процента скидки
if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (15000 <= fullPrice && fullPrice <= 30000) {
    console.log("Даем скидку в 5%");
} else if (15000 > fullPrice && fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice <= 0) {
    console.log("Что-то пошло не так");
}

console.log(fullPrice);
console.log((servicePercentPrice));
function getAllServicePrices(params) {
    
}

console.log("Стоимость верстки экранов", screenPrice, "рублей/долларов/гривен/юани \n"+"Стоимость разработки сайта",fullPrice,"рублей/долларов/гривен/юани"
 ); 
screens = screens.toLowerCase()

screens = screens.split(", ")

console.log(screens);

console.log(fullPrice * (rollback/100));

