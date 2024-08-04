let title = "My first project on Java Script."

let screens = "Простые, Сложные, Интерактивные"

let screenPrice = 12

let rollback = 95

let fullPrice = 150

let adaptive = true

console.log(typeof title);

console.log(typeof fullPrice);

console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов", screenPrice, "рублей/долларов/гривен/юани \n"+"Стоимость разработки сайта",fullPrice,"рублей/долларов/гривен/юани"
 ); 
screens = screens.toLowerCase()

screens = screens.split(", ")

console.log(screens);

console.log(fullPrice * (rollback/100));
