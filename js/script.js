
// Start word-wrapper 
var wordElements = document.querySelectorAll('.word');
var currentIndex = 0;

function flipWords() {
  wordElements[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % wordElements.length;
  wordElements[currentIndex].classList.add('active');
}

setInterval(flipWords, 4000);
// End word-wrapper 
