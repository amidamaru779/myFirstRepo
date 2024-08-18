'use strict';

const appData = {
    title: '',
    screens: '', 
    screenPrice: 0, 
    adaptive: true,
    service1: '',
    service2: '',
    rollback:  10,
    fullPrice: 0,
    servicePercentPrice: 0, 
    allServicePrices: 0,

    start: function () {
        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrices()
        appData.title = appData.getTitle()
        appData.logger()
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }, 
    asking: function() {
        appData.title = prompt("Как называется ваш проект?");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
        
        do{
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice))
         
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    getAllServicePrices: function() {
        let sum = 0
        let price 
        for (let i = 0; i < 2; i++) {
    
            if (i === 0){
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?")
            } else if (i ===1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?")
            }
            
            do {
                price = prompt("Сколько это будет стоить?")
            } while (!appData.isNumber(price))
            
            sum += +price
        }    
        
        return sum
        
    },
    getFullPrice: function() {
        return  +appData.screenPrice + appData.allServicePrices 
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
        return appData.title.trim() + appData.title.charAt(0).toUpperCase() + appData.title.slice(1).toLowerCase(); 
    },
    getServicePercentPrices: function() {
        return Math.ceil(appData.fullPrice-(appData.fullPrice*(appData.rollback/100)))
    },
    logger: function () {
        for (let key in appData)
        console.log("Ключ:" + key + " " + "Значение:"+ appData[key]);
    }  
}
appData.start() 