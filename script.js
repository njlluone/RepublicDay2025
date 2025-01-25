document.getElementById('unfurlButton').addEventListener('click', () => {
  
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();
  recognition.onresult = (event) => {
	  const transcript = event.results[0][0].transcript.toLowerCase();
	  console.log('You said:', transcript);

	  if (['india', 'bharat', 'bharath'].includes(transcript.replace('.', '').trim())) {
		const flag = document.getElementById('flag');
		const thread = document.getElementById('thread');
		const container = document.querySelector(".flag-container");
		const flowersContainer = document.getElementById('flowers-container');
		const unfurlHeight = container.offsetHeight * 0.3;
		let unfurlWidth;

		// Unfurl the flag
		flag.style.height = `${unfurlHeight}px`;
	  
		if (window.innerWidth > 768) {
		  unfurlWidth = container.offsetWidth * 0.9; // Larger width for desktop
		} else {
		  unfurlWidth = container.offsetWidth * 1.5; // Smaller width for mobile/tablet
		}
	  

		// Unfurl the flag
		flag.style.width = `${unfurlWidth}px`;

		// Remove the thread after unfurling
		thread.style.display = 'none';
	    // Generate falling flowers
		sleepFor(1000);
		for (let i = 0; i < 20; i++) {
		  const flower = document.createElement('div');
		  flower.classList.add('flowers');
		  flower.style.left = `${Math.random() * 100}%`;
		  flower.style.top = "1.5rem";
		  
		  // Assign random animation delay
		  
		  flower.style.animationDelay = `${Math.random() * 5}s`; // Random delay between 0 to 5 seconds
		  
		  container.appendChild(flower);

		  // Remove flower after animation ends
		  flower.addEventListener('animationend', () => {
			flower.remove();
		  });
		}

  
		const elementsWithId = document.querySelectorAll('#leftArm'); 

		elementsWithId.forEach(element => {
		  setTimeout(rotateArm, 2000, element);
		});
		
      }
    };
});
function rotateArm(element) {
  element.style.top = "5px";
  element.style.animation = "1s"; 
  element.style.transform = "rotate(50deg)";
}


function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ 
        /* Do nothing */ 
    }
}
