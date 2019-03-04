(() => {
	console.log("fired! ready to jam!");

							// Event = e.
	function playDrumKitSound(event) {
		// debugger;
		// slect the corresponding audio element and make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

		// console.log(audio);
		// checking for a matching audi element, then kill function
		if (!audio) { return; } 

		
		audio.currentTime = 0;
		audio.play();
	}

	window.addEventListener("keydown", playDrumKitSound);

})();