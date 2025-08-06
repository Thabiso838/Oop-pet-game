class Pet {
  constructor(name, sound, image) {
    this.name = name;
    this.sound = sound;
    this.image = image;
    this.playCount = 0;
  }

  speak() {
    alert(this.sound);
  }

  play() {
    this.playCount++;
    this.speak();
    updateCounter(this.playCount);
    showFunActions(this.name);
  }
}

// global variable to store the chosen pet
let currentPet = null;

// function to choose a pet
function choosePet(type) {
  if (type === 'dog') {
    currentPet = new Pet('Dog', 'Woof!', 'images (1).jpeg');
  } else {
    currentPet = new Pet('Cat', 'Meow!', 'download.webp');
  }

  document.getElementById('petImage').src = currentPet.image;
  document.getElementById('game').style.display = 'block';
  updateCounter(0);
  showFunActions(currentPet.name);
}

// function to play with the pet
function playWithPet() {
  if (currentPet) {
    currentPet.play();
  }
}

// function to update the counter
function updateCounter(count) {
  document.getElementById('counter').innerText = 'Times played: ' + count;
}

// function + loop: fun pet actions
function showFunActions(petName) {
  const actions = {
    'Dog': ['Fetch Ball', 'Wag Tail', 'Chase Mouse'],
    'Cat': ['Pounce', 'Purr', 'Chase Laser']
  };

  const actionBox = document.getElementById('actions');
  actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';
  
  // loop through actions and show them
  for (let i = 0; i < actions[petName].length; i++) {
    actionBox.innerHTML += actions[petName][i] + '<br>';
  }
}
