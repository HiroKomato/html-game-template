const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let enemies = [];

// Enemy erzeugen
function createEnemy() {
  const pos = randomSpawn(canvas.width, canvas.height);
  enemies.push({
    x: pos.x,
    y: pos.y,
    radius: 20,
    speed: 2
  });
}

function update() {
  // Bewege enemies zur Mitte
  enemies.forEach(enemy => {
    const newPos = moveToward(enemy.x, enemy.y, canvas.width / 2, canvas.height / 2, enemy.speed);
    enemy.x = newPos.x;
    enemy.y = newPos.y;
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  enemies.forEach(enemy => {
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
  });
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Starte das Spiel
createEnemy(); // Test enemy
setInterval(createEnemy, 2000); // enemies spawnen
gameLoop();
