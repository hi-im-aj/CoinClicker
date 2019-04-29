let cashTxt = document.querySelector("#counterTxt");
let coinBtn = document.querySelector("#coinBtn");
let timeDisplay = document.querySelector("#timeDisplay");
let businessList = document.querySelector("#businessList");
let cashflowTxt = document.querySelector("#cashflowTxt");
let acBtn = document.querySelector("#acBtn");
let acCost = document.querySelector("#acCost");
let acOwned = document.querySelector("#acOwned");
let dateTime = new Date;
let dateTimeInterval = setInterval(myDateTime,1000);
let cash = 0;
let cashflow = 0;
let acCount = 1;
let acPrice = 10;
let ownedAc = 0;
let initAcPrice = 10;

function myDateTime() {
	let time = new Date;
	timeStr = time.getHours()+":"+time.getMinutes();
	timeDisplay.innerHTML = timeStr;
}

function updateDom() {
	cashTxt.innerHTML = Math.trunc(cash);
	acCost.innerHTML = `$${acPrice}`;
	acOwned.innerHTML = ownedAc;
	cashflowTxt.innerHTML = `Cashflow: ${cashflow} coins pr second`;
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
				owned++;
				price += initPrice * 0.1;
				cashflow += initPrice * 0.02;
				document.querySelector(`#owned${id}`).innerHTML = owned;
				document.querySelector(`#PriceTxt${id}`).innerHTML = `$${price}`;
				updateDom();
			}
		});
	}
}

let business1 = new Business(1,"Lemon Stand",0,50,50);
let business2 = new Business(2,"Newspaper Delivery",0,1000,1000);
let business3 = new Business(3,"Car Wash",0,25000,25000);

timeDisplay.innerHTML = dateTime.getHours()+":"+dateTime.getMinutes();
acBtn.addEventListener("click",function() {
	if (acPrice <= cash) {
		cash -= acPrice;
		acPrice += initAcPrice * 0.1;
		acCount += initAcPrice * 0.02;
		ownedAc++;
		updateDom();
	}
});
coinBtn.addEventListener("click", function() {
	cash += acCount;
	updateDom();
});

setInterval(function(){
	cash += cashflow / 10;
	updateDom();
},1000/10);