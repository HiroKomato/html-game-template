// Utility Functions

// Random Zahl in range
function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Random Integer in range
function randomInt(min, max) {
  return Math.floor(randomRange(min, max));
}

// Random spawnü-Position
function randomSpawn(canvasWidth, canvasHeight, margin = 50) {
  const sides = ['top', 'bottom', 'left', 'right'];
  const side = sides[randomInt(0, sides.length)];

  switch (side) {
    case 'top':
      return { x: randomRange(0, canvasWidth), y: -margin };
    case 'bottom':
      return { x: randomRange(0, canvasWidth), y: canvasHeight + margin };
    case 'left':
      return { x: -margin, y: randomRange(0, canvasHeight) };
    case 'right':
      return { x: canvasWidth + margin, y: randomRange(0, canvasHeight) };
  }
}

// Abstand zw. den Punkten
function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// Bewegen zum Punkt
function moveToward(x1, y1, x2, y2, speed) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  return {
    x: x1 + Math.cos(angle) * speed,
    y: y1 + Math.sin(angle) * speed
  };
}
