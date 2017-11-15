$(function(){
  console.log('DOM loaded!');
  var carouselList = $('#carousel ul');
  console.log(carouselList);
  setTimeout(changeSlide, 3000);
  setInterval(changeSlide, 3000);
  function changeSlide(){
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
}
	function moveFirstSlide(){
	  var firstItem = carouselList.find("li:first");
      var lastItem = carouselList.find("li:last");
      lastItem.after(firstItem);
      carouselList.css({marginLeft:0});
	}

});
