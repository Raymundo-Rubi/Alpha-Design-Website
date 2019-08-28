$('#pitch').delay(85).fadeIn(1500);

$('.funFacts').delay(85).fadeIn(1500);

(function($) {
  $(function() {
    $('.toggleOverlay').click(function() {
      $('aside').toggleClass('open');
    });
  });
})(jQuery);

var i = 0; //start point of slideshow
var images = [];
var time = 2000;

//image list
images[0] = './images/sign_slide.jpg'
images[1] = './images/work_slide.jpg'
images[2] = './images/office_slide.jpg'

//Change image
function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;