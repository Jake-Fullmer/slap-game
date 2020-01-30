let health = 100;
let name = 'Billy';
let hits = 0;
document.getElementById("name").innerHTML = `${name}`;

function slap() {
  health = health - 1;
  hits = hits + 1;
  update();
}
function pullHair() {
  health = health - 5;
  hits = hits + 1;
  update();
}
function bite() {
  health = health - 10;
  hits = hits + 1;
  update();
}

function update() {
  document.getElementById("health").innerHTML = `${health}`;
  document.getElementById("hits").innerHTML = `${hits}`;
}

update();