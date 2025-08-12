class Pet {
  constructor(name, soundText, image, soundUrl) {
    this.name = name;
    this.soundText = soundText;
    this.image = image;
    this.soundUrl = new Audio (soundUrl);
    this.playCount = 0;
  }

  speak() {
    alert(this.soundText);
    this.soundUrl.currentTime = 0;
    this.soundUrl.play();

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
    currentPet = new Pet('Dog', 'Woof!', 'images (1).jpeg', 'media/dog-bark-effect-382711.mp3');
  } else if (type === 'cat') {
    currentPet = new Pet('Cat', 'Meow!', 'download.webp', 'media/cat-meow-8-fx-306184.mp3');
  } else if (type === 'lion') {
    currentPet = new Pet('lion', 'Raoring!', '020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg', 'media/lion-roar-6011.mp3');
  } else if (type === 'snake') {
    currentPet = new Pet('Snake', 'Hiss!', '12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg', 'media/snake-hiss-95241.mp3');
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
    'Cat': ['Pounce', 'Purr', 'Chase Laser'],
    'lion': ['chase', 'furr', 'hunt', 'raorr'],
    'snake': ['hiss', 'spitting', 'venom'],
  
  };

  const actionBox = document.getElementById('actions');
  actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';
  
  // loop through actions and show them
  for (let i = 0; i < actions[petName].length; i++) {
    actionBox.innerHTML += actions[petName][i] + '<br>';
  }
}
