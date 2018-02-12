(function(){
	// Needs jQuery
	var version = "1.10.2";
	// Check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + version + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initBoxify(window.jQuery);
			}
            else {
                console.log('error loading');
            }
		};
		document.getElementsByTagName("head")[0].appendChild(script);
        if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
            console.log(':::');
        }
        else {
            console.log('jquery loaded');
        }
	} else {
		initBoxify(window.jQuery);
	}
	function initBoxify($) {
		(window.boxify = function() {
      var colors = ["red", "blue", "pink", "green", "yellow"];
      var randomColor = Math.floor(Math.random() * colors.length);
      var chosenColor = colors[randomColor];
      $("*").css("border", "1px solid " + chosenColor);

		})();
	}
})();
