'use strict';
// Калькулятор вёрстки
const title = document.getElementsByTagName('h1')[0]
// Кнопки: Start, Reset  и "+"
const handlerBtnStart = document.getElementsByClassName('handler_btn')[0]
const handlerBtnReset = document.getElementsByClassName('handler_btn')[1]
const screenBtn = document.querySelector('.screen-btn')
// Элементы с percent и number
const otherItemsPercent = document.querySelectorAll('.percent')
const otherItemsNumber = document.querySelectorAll('.number')
// Ползунок и изменяющийся процент
const inputType = document.querySelector('.rollback [type="range"]')
const span = document.querySelector('.rollback .range-value')
// Все 5 input 
const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther= document.getElementsByClassName('total-input')[2]
const totalFullCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]
// Блоки "типы экранов" и "количество экранов"
let screen = document.querySelectorAll('.screen')


console.log(title);
console.log(handlerBtnStart);
console.log(handlerBtnReset)
console.log(screenBtn);
console.log(otherItemsPercent);
console.log(otherItemsNumber);
console.log(inputType);
console.log(span);
console.log(total);
console.log(totalCount);
console.log(totalCountOther);
console.log(totalFullCount);
console.log(totalCountRollback);
console.log(screen);


/*const appData = {
    title: '',
    screens: [], 
    screenPrice: 0, 
    adaptive: true,
    services: {},
    rollback:  10,
    fullPrice: 0,
    servicePercentPrice: 0, 
    allServicePrices: 0,

    start: function () {
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrices()
        appData.getTitle()
        appData.logger()
    },

    isString: function (str) {
        return isNaN(str)
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }, 
    asking: function() {
        appData.title 
        do {
            appData.title = prompt("Как называется ваш проект?");; 
        } while (!appData.isString(appData.title))

        for (let i = 0; i < 2; i++) {
            let name 
            let price = 0 
            do {
                name = prompt("Какие типы экранов нужно разработать?"); 
            } while (!appData.isString(name)) 
            
            
            
            do{
                price = prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(price))
            
            appData.screens.push({id: i, name: name, price: price})
            
        }
        
        for (let i = 0; i < 2; i++) {
            let name 
            let price = 0
            do {
                name = prompt("Какой дополнительный тип услуги нужен?"); 
            } while (!appData.isString(name)) 
    
            do {
                price = prompt("Сколько это будет стоить?")
            } while (!appData.isNumber(price))
                
            appData.services[name] = +price
        }    
         
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function (){
        for (let screen of appData.screens){
            appData.screenPrice += +screen.price
        }
        for (let key in appData.services){
            appData.allServicePrices += appData.services[key]
        }
    },
    getFullPrice: function() {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices 
    },
    getRollbackMessage: function(price) {
        if (price > 30000) {
            return "Даем скидку в 10%"
        } else if (15000 <= price && price <= 30000) {
            return "Даем скидку в 5%"
        } else if (15000 > price && price > 0) {
            return "Скидка не предусмотрена"
        } else if (price <= 0) {
            return "Что-то пошло не так"
        }
    },
    getTitle: function() {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase(); 
    },
    getServicePercentPrices: function() {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice-(appData.fullPrice*(appData.rollback/100)))
    },
    logger: function () {
        for (let key in appData)
        console.log("Ключ:" + key + " " + "Значение:"+ appData[key]);
        console.log(appData.screens);
        
    }  
}
appData.start()
*/ 