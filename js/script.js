'use strict';

const title = document.getElementsByTagName('h1')[0]

const handlerBtnStart = document.getElementsByClassName('handler_btn')[0]
const handlerBtnReset = document.getElementsByClassName('handler_btn')[1]
const screenPlus = document.querySelector('.screen-btn')

const otherItemsPercent = document.querySelectorAll('.percent')
const otherItemsNumber = document.querySelectorAll('.number')

const inputType = document.querySelector('.rollback [type="range"]')
const span = document.querySelector('.rollback .range-value')

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const totalFullCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [],
    countScreens: 0,
    screenPrice: 0,
    adaptive: true,
    servicesPercent: {},
    servicesNumber: {},
    rollback: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    init: function () {
        appData.addTitle()

        appData.changeSpan()

        handlerBtnStart.addEventListener('click', appData.start)
        screenPlus.addEventListener('click', appData.addScreenBlock)
    },
    addTitle: function () {
        document.title = title.textContent

    },
    start: function () {
        if (!appData.checkField()) {
            alert("Пожалуйста введите тип экрана и их колличество!")
        } else {
            appData.addScreens()
            appData.addServices()
            appData.addPrices()
            appData.showResult()
            console.log(appData);
        }


        //appData.logger()  


    },
    checkField: function () {
        screens = document.querySelectorAll('.screen')
        let error = false;
        screens.forEach(function (screen) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            if (select.value === '' || input.value === '') {
                error = true;
            }
        })

        return !error
    },
    showResult: function () {
        total.value = appData.screenPrice
        totalCount.value = appData.countScreens
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        totalFullCount.value = appData.fullPrice
        totalCountRollback.value = appData.servicePercentPrice
    },
    changeSpan: function () {
        let changer = function () {
            span.textContent = inputType.value + "%"
            appData.rollback = +inputType.value
        }
        inputType.addEventListener('input', changer)

    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen')

        screens.forEach(function (screen, index) {

            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
            console.log(input);

            appData.screens.push({
                id: index,
                name: selectName,
                count: +input.value,
                price: +select.value * +input.value
            })
        })
    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })

    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)

        screens[screens.length - 1].after(cloneScreen)
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
            appData.countScreens += +screen.count
        }
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }
        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)))
    },
    logger: function () {
        for (let key in appData)
            console.log("Ключ:" + key + " " + "Значение:" + appData[key]);
        console.log(appData.screens);

    }
}
appData.init()