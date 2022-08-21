/* 
* Skeleton V1.0.2
* Copyright 2011, Dave Gamache
* www.getskeleton.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 5/20/2011
*/	
	

$(document).ready(function() {

	/* Tabs Activiation
	================================================== */
	var tabs = $('ul.tabs'),
	    tabsContent = $('ul.tabs-content');
	
	tabs.each(function(i) {
		//Get all tabs
		var tab = $(this).find('> li > a');
		tab.click(function(e) {
			
			//Get Location of tab's content
			var contentLocation = $(this).attr('href') + "Tab";
			
			//Let go if not a hashed one
			if(contentLocation.charAt(0)=="#") {
			
				e.preventDefault();
			
				//Make Tab Active
				tab.removeClass('active');
				$(this).addClass('active');
				
				//Show Tab Content
				$(contentLocation).show().siblings().hide();
				
			} 
		});
	}); 
	
	
	/* Parallax Background by Brett Taylor
	================================================== */

	function calcParallax(tileheight, speedratio, scrollposition) {
		return (tileheight - (Math.floor(scrollposition / speedratio) % (tileheight+1)));
	}

	$(document).ready(function () {
		window.onscroll = function() {
			var posY = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : window.pageYOffset;

			var plane = document.getElementById('plane');
			var planeparallax = calcParallax(3000, 8, posY);
			plane.style.backgroundPosition = "0 " + planeparallax + "px"; 

			var midplane = document.getElementById('midplane');
			var midplaneparallax = calcParallax(2800, 3, posY);
			midplane.style.backgroundPosition = "0 " + midplaneparallax + "px"; 

		}
	});


	/* Back to Top
	================================================== */

	function resetFunction()
	{
	$('html, body').animate({scrollTop:0}, 1500, 'easeOutQuint');

	}


	/* Fade in
	================================================== */

	$(document).ready(function () {
		$('.container').hide().delay(400).fadeIn(1000);
	});



});