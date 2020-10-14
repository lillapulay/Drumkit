// Listens to 'keydown' events on the window
// Event = object containing data
window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Attribute selector using an ES6 template string
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // Stops the function from executing if there is no audio associated with the key
  audio.currentTime = 0; // Rewinds file - so if the button is pressed repeatedly it starts playing on every press
  audio.play();
  key.classList.add('playing'); // For the animation class
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // Skips it if iT's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // Listens to every single key - when transition ends, removes animation effect