'use strict';

let title = prompt("Как называется ваш проект?")
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
let screenPrice = +prompt("Сколько будет стоить данная работа?",  "12000")
let adaptive = confirm("Нужен ли адаптив на сайте?")
let service1 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice1 = +prompt("Сколько это будет стоить?")
let service2 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice2 = +prompt("Сколько это будет стоить?")
let rollback = 95
let fullPrice 
let servicePercentPrice  
let allServicePrices

<<<<<<< HEAD

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

console.log("Стоимость верстки экранов", screenPrice, "рублей/долларов/гривен/юани \n"+"Стоимость разработки сайта",fullPrice,"рублей/долларов/гривен/юани"
 ); 
=======
const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
    
}

const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2
}

function getFullPrice() {
    return screenPrice + allServicePrices 
     
}

const getRollbackMessage = function(price) {
    if (price > 30000) {
        return "Даем скидку в 10%"
    } else if (15000 <= price && price <= 30000) {
        return "Даем скидку в 5%"
    } else if (15000 > price && price > 0) {
        return "Скидка не предусмотрена"
    } else if (price <= 0) {
        return "Что-то пошло не так"
    }
}

const  getTitle = function() {
    title = title.trim();
    title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    return title
}

function getServicePercentPrices() {
    return Math.ceil(fullPrice - (rollback/100))

}

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
getTitle()
servicePercentPrice = getServicePercentPrices()

showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

>>>>>>> lesson04
screens = screens.toLowerCase()
screens = screens.split(", ")
console.log(screens);
console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
console.log("Стоимость верстки экранов", screenPrice, "рублей/долларов/гривен/юани \n"+"Стоимость разработки сайта",fullPrice,"рублей/долларов/гривен/юани"); 
 