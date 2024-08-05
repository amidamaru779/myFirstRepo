
// задаём вопросы пользователю о проекте
let title = prompt("Как называется ваш проект?")

let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные?")

let screenPrice = prompt("Сколько будет стоить данная работа?",  "12000")

let adaptive = confirm("Нужен ли адаптив на сайте?")

let service1 = prompt("Какой дополнительный тип услуги нужен?")

let servicePrice1 = prompt("Сколько это будет стоить?")

let service2 = prompt("Какой дополнительный тип услуги нужен?")

let servicePrice2 = prompt("Сколько это будет стоить?")

//высчитываем полную стоимость
let total = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2)

let rollback = 95

//занес результат total в fullprice
let fullPrice = total
console.log(fullPrice);

let servicePercentPrice = Math.ceil(fullPrice - (rollback/100))
console.log((servicePercentPrice));







