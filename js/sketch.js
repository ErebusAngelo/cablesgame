let LM;
let navigationTriggered = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  LM = new PointServer();
  
}

function draw() {
  clear(); // Make canvas transparent
  LM.display();
  LM.update();
  
  // Check for collision with the start button
  if (!navigationTriggered) {
    const btn = document.querySelector('.btn-comenzar');
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const points = LM.getAllPoints();
      
      for (let point of points) {
        if (point.x >= rect.left && point.x <= rect.right &&
            point.y >= rect.top && point.y <= rect.bottom) {
          
          navigationTriggered = true;
          window.location.href = 'game.html';
          break;
        }
      }
    }
  }
}

// Touch event handlers for p5.js
function touchStarted() {
  // Allow default behavior for touch events
  return true;
}

function touchMoved() {
  // Allow default behavior for touch events
  return true;
}

function touchEnded() {
  // Allow default behavior for touch events
  return true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

