let counterTxt = document.querySelector("#counterTxt");
let coin = document.querySelector("#coinBtn");
let dateTime = new Date;
let timeDisplay = document.querySelector("#timeDisplay");
let dateTimeInterval = setInterval(myDateTime,1000);
let businessList = document.querySelector("#businessList");
timeDisplay.innerHTML = dateTime.getHours()+":"+dateTime.getMinutes();

let counter = 0;
let cashflow = 0;

coin.onclick = function(){
	counter++;
	counterTxt.innerHTML = counter;
}
function myDateTime() {
	let time = new Date;
	timeStr = time.getHours()+":"+time.getMinutes();
	timeDisplay.innerHTML = timeStr;
}

class Business {
	constructor(id,name,owned,price) {
		this.id = id;
		this.name = name;
		this.owned = owned;
		this.price = price;
		this.cashflow = 0;
		if (owned != 0) {
			this.price = price + owned * price * 0.1;
			this.cashflow = price * 0.01 * owned;
		}
		businessList.innerHTML += `<li><button id='${id}'><img src=''><h1>${name}</h1><p>$${price}</p></button></li>`;
	}
}

let business1 = new Business(1,"Lemon Stand",2,50);
let business2 = new Business(2,"Newspaper Delivery",1,1000);
let business3 = new Business(3,"Car Wash",3,75000);