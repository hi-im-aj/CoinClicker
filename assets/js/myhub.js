let counterTxt = document.querySelector("#counterTxt");
let coin = document.querySelector("#coinBtn");
let counter = 0;
let dateTime = new Date;
let clock = dateTime.getHours()+":"+dateTime.getMinutes()+":"+dateTime.getSeconds();
let timeDisplay = document.querySelector("#timeDisplay");
let dateTimeInterval = setInterval(myDateTime,1000);

timeDisplay.innerHTML = clock;

coin.onclick = function(){
	counter++;
	counterTxt.innerHTML = counter;
}
function myDateTime() {
	let time = new Date;
	timeStr = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
	timeDisplay.innerHTML = timeStr;
}