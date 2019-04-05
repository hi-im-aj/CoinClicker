var counterTxt = document.querySelector("#counterTxt");
var coin = document.querySelector("#coinBtn"), counter = 0;

coin.onclick = function(){
	counter += 1;
	counterTxt.innerHTML = counter;
};