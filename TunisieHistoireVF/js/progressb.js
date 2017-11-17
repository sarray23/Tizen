function whichAnimationEvent() {
  var t;
  var el = document.createElement('fakeelement');
  var animations = {
    'animation': 'animationend',
    'OAnimation': 'oAnimationEnd',
    'MozAnimation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd'
  };

  for (t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
}

function oload() {
    var animationEvent = whichAnimationEvent(),
      progress = document.getElementsByClassName('progress-bar')[0];

    animationEvent && progress.addEventListener(animationEvent, function() {
      parent.location=("accueil.html");
    });
  }
  // Listen for animation