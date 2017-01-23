$(function(){
	var carouselList = $("#carousel ul");
	//setInterval(changeSlide, 3000);
	
	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	};
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
	};

	$('#previous-btn').click(function() {
		moveLastSlide()
		carouselList.animate({'marginLeft':0}, 500);
	});

	$('#next-btn').click(function() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	});

});


