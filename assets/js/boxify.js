(function(){
	let all = document.querySelectorAll(`*`);

	for (let i = 0; i < all.length; i++) {
	  let colors = [`red`, `blue`, `lime`, `pink`, `yellow`, `black`, `cyan`, `magenta`, `blueviolet`];
	  let randomColor = Math.floor(Math.random() * colors.length);
	  let chosenColor = colors[randomColor];
	  all[i].style.border =  `2px solid ${chosenColor}`;
	}
})();
