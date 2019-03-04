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
		//  ^ is a "not" operater or a bang

		
		audio.currentTime = 0;
		audio.play();

		// grab the div on every click and animate it
		let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
		key.classList.add('playing');
	}

	function removePlayingClass(event) {
		// debugger;

		if (event.propertyName !== "transform") {
			return;
		} else {
			// remove the playing class here from the active div
			console.log('transform is done!', `${event.propertyName}`);
			event.target.classList.remove('playing');
		}	
	}

	const keys = Array.from(document.querySelectorAll('.keys'));

	keys.forEach(key => key.addEventListener("transitionend", removePlayingClass));

	window.addEventListener("keydown", playDrumKitSound);

})();
