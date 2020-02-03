let billy = {
  health: 100,
  name: 'Billy',
  hits: 0,
  items: [],
};

document.getElementById("name").innerHTML = billy.name;


let items = {
  fire: { name: 'Fire', modifier: 2, description: 'IT BURNS!' },
  poison: { name: 'Poison', modifier: 3, description: 'NO, NOT POISON!' },
  ice: { name: 'Ice', modifier: 4, description: 'IT IS SO COLD!' },
};


function slap() {
  billy.health = (billy.health - 1) - addMods();
  billy.hits = billy.hits + 1;
  update();
  console.log("From billy's items: ", billy.items);

}
function pullHair() {
  billy.health = (billy.health - 5) - addMods();
  billy.hits = billy.hits + 1;
  update();
}
function bite() {
  billy.health = (billy.health - 10) - addMods();
  billy.hits = billy.hits + 1;
  update();
}

function giveFire() {
  billy.items.push(items.fire);
}
function givePoison() {
  billy.items.push(items.fire);
}
function giveIce() {
  billy.items.push(items.fire);
}

function addMods() {
  let modTotal = 0;
  for (var i = 0; i < billy.items.length; i++) {
    modTotal += billy.items[i].modifier;
  }
  return modTotal;
}


function update() {
  document.getElementById("health").innerHTML = billy.health;
  document.getElementById("hits").innerHTML = billy.hits;
}

update();