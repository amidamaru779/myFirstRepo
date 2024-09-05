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

const cms = document.getElementById('cms-open')

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
        this.addTitle()
        this.changeSpan()

        handlerBtnStart.addEventListener('click', () => this.start())
        screenPlus.addEventListener('click', () => this.addScreenBlock())
        handlerBtnReset.addEventListener('click', () => this.reset())
        cms.addEventListener('click', () => this.openCms())
    },
    addTitle: function () {
        document.title = title.textContent
    },
    start: function () {
        if (!this.checkField()) {
            alert("Пожалуйста введите тип экрана и их колличество!")
        } else {
            this.addScreens()
            this.addServices()
            this.addPrices()
            this.showResult()
            this.disableFunc()
            console.log(this);
        }
        //appData.logger()  
    },
    checkField: function () {
        screens = document.querySelectorAll('.screen')
        let error = false;
        screens.forEach((screen) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            if (select.value === '' || input.value === '') {
                error = true;
            }
        })
        return !error
    },
    showResult: function () {
        total.value = this.screenPrice
        totalCount.value = this.countScreens
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        totalFullCount.value = this.fullPrice
        totalCountRollback.value = this.servicePercentPrice
    },
    changeSpan: function () {
        let changer = () => {
            span.textContent = inputType.value + "%"
            this.rollback = +inputType.value
        }
        inputType.addEventListener('input', changer)

    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen')

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            this.screens.push({
                id: index,
                name: selectName,
                count: +input.value,
                price: +select.value * +input.value
            })
        })
    },
    addServices: function () {
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value
            }
        })
        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)
        const input = cloneScreen.querySelector('input')
        input.value = ""
        screens[screens.length - 1].after(cloneScreen)
    },
    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price
            this.countScreens += +screen.count
        }
        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }
        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }

        this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber
        this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback / 100)))
    },
    disableFunc: function () {
        screens = document.querySelectorAll('.screen')
        screens.forEach((screen) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            select.disabled = true
            input.disabled = true
            handlerBtnReset.style = "display: flex"
            handlerBtnStart.style = "display: none"
        })
    },
    openCms: function () {
        const hiddenCmsVariants = document.querySelector('.hidden-cms-variants')
        hiddenCmsVariants.style = "display: flex"
        console.log(hiddenCmsVariants);

    },
    reset: function () {
        this.clearAppDataValue()
        this.unlockBoards()
        this.clearInputs()
        this.deleteBlock()
        this.clearValue()
    },
    // блок методов для reset
    clearAppDataValue: function () {
        this.screens = []
        this.countScreens = 0
        this.screenPrice = 0
        this.servicesPercent = {}
        this.servicesNumber = {}
        this.rollback = 0
        this.fullPrice = 0
        this.servicePercentPrice = 0
        this.servicePricesPercent = 0
        this.servicePricesNumber = 0
        console.log(this);
    },
    clearInputs: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach((screen) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            select.value = '';
            input.value = '';
        });
    },
    clearValue: function () {
        inputType.value = 0;
        span.textContent = '0%';

        total.value = '';
        totalCount.value = '';
        totalCountOther.value = '';
        totalFullCount.value = '';
        totalCountRollback.value = '';
    },
    deleteBlock: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach((screen, index) => {
            if (index > 0) {
                screen.remove()
            }
        })
    },
    unlockBoards: function () {
        screens = document.querySelectorAll('.screen')
        screens.forEach((screen) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            select.disabled = false
            input.disabled = false
            handlerBtnReset.style = "display: none"
            handlerBtnStart.style = "display: flex"
        })
    },
}
appData.init()