coinBtn.style.position = "relative";

$("#coinBtn").click(function() {
	$("#coinBtn").animate({width: "150px", height: "150px"}, 50);
	$("#coinBtn").animate({width: "300px", height: "300px"}, 50);
});