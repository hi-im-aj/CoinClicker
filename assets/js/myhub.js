let cashTxt = document.querySelector("#counterTxt");
let coinBtn = document.querySelector("#coinBtn");
let dateTime = new Date;
let timeDisplay = document.querySelector("#timeDisplay");
let dateTimeInterval = setInterval(myDateTime,1000);
let businessList = document.querySelector("#businessList");
let cashflowTxt = document.querySelector("#cashflowTxt");
let cash = 0;
let cashflow = 0;

function myDateTime() {
	let time = new Date;
	timeStr = time.getHours()+":"+time.getMinutes();
	timeDisplay.innerHTML = timeStr;
}

class Business {
	constructor(id,name,owned,price,initPrice) {
		if (owned != 0) {
			this.price = price + owned * price * 0.1;
		}

		this.newLi = document.createElement("li");
		this.newLi.id = `businessListItem${id}`;
		businessList.appendChild(this.newLi);
		this.domTarget = document.querySelector(`#businessListItem${id}`);
		this.newBtn = document.createElement("button");
		this.newBtn.id = `businessBtn${id}`;
		this.domTarget.appendChild(this.newBtn);
		this.domTarget = document.querySelector(`#businessBtn${id}`);
		this.domTarget.innerHTML = `<img src=''><h1>${name}</h1><p id=PriceTxt${id}>$${price}</p><p id='owned${id}'>${owned}</p>`;
		this.domTarget.addEventListener("click",function() {
			if (price <= cash) {
				cash -= price;
				cashTxt.innerHTML = cash;
				owned++;
				price = price + initPrice * 0.1;
				cashflow += initPrice * 0.02;
				cashflowTxt.innerHTML = `Cashflow: ${cashflow} coins pr second`;
			}
			document.querySelector(`#owned${id}`).innerHTML = owned;
			document.querySelector(`#PriceTxt${id}`).innerHTML = `$${price}`;
		});
	}
}

let business1 = new Business(1,"Lemon Stand",0,50,50);
let business2 = new Business(2,"Newspaper Delivery",0,1000,1000);
let business3 = new Business(3,"Car Wash",0,75000,75000);

timeDisplay.innerHTML = dateTime.getHours()+":"+dateTime.getMinutes();
coinBtn.addEventListener("click", function() {
	cash++;
	cashTxt.innerHTML = cash;
});
setInterval(function(){
	cash += cashflow / 4;
	cashTxt.innerHTML = cash;
},1000/4);