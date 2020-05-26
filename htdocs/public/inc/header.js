var html5video = document.createElement('video').canPlayType('video/mp4');
	document.write('<div style="height: 480; width: 1920; overflow: hidden; z-index: -12;">');
	if(html5video){
		document.write('<video playsinline autoplay muted loop id="header-vid">');
		document.write('<source src="video/NetVideoTest5.mp4" type="video/mp4">');
		document.write('</video>');
	}else{
		document.write('<img src="/img/Spaceship.jpg"');
		/*document.body.style.backgroundImage = "url('/img/Spaceship.jpg')"; 
		document.body.style.backgroundAttachment = "fixed"; 
		document.body.style.backgroundSize = "100%";*/
		//document.write('background="/img/Spaceship.jpg"');
	}
	
	var video = document.getElementById("header-vid");
	video.width = window.innerWidth;
	video.style.down = window.innerHeight/3;	
	video.style.overflow="hidden";
	video.style.zIndex = -2;
	var onresize = function() {
   //note i need to pass the event as an argument to the function
   video.width = window.innerWidth;
   video.height = window.innerHeight/2;

}
window.addEventListener("resize", onresize);
	document.write('</div>')