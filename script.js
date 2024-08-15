'use strict';

let title 
let screens 
let screenPrice 
let adaptive 

let service1 
let service2 
let rollback = 95
let fullPrice 
let servicePercentPrice  
let allServicePrices

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function() {
    title = prompt("Как называется ваш проект?");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
    
    do{
        screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice))
     
    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getAllServicePrices = function() {
    let sum = 0
    let price 
    for (let i = 0; i < 2; i++) {

        if (i === 0){
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i ===1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        }
        
        do {
            price = prompt("Сколько это будет стоить?")
        } while (!isNumber(price))
        
        sum += +price
    }    
    
    return sum
    
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
    
}

function getFullPrice() {
    return  +screenPrice + allServicePrices 
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
     return title.trim() + title.charAt(0).toUpperCase() + title.slice(1).toLowerCase(); 
}

function getServicePercentPrices() {
    return Math.ceil(fullPrice - (rollback/100))

}

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()


showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

screens = screens.toLowerCase()
screens = screens.split(", ")
console.log("allServicePrices", allServicePrices);
console.log(screens);
console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
console.log("Стоимость верстки экранов", screenPrice, "рублей/долларов/гривен/юани \n"+"Стоимость разработки сайта",fullPrice,"рублей/долларов/гривен/юани"); 
 