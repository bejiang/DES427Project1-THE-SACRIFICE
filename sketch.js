//let the animal pics list begin
let mallardDuck;
let houseCat;
let stBernard;
let whiteTailedDeer;
let canadaGoose;
let civet;
let americanCrow;
let siberianTiger;
let ranchuGoldfish;
let bubbleEyeGoldfish;
let bullShark;
let greatWhiteShark;
let longTailedChinchilla;
let pika;
let africanForestBuffalo;
let jacobSheep;
let capybara;
let grayWolf;
let polarBear;
let mountainGoat;
let ankoleWatusiCow;
let damascusGoat;
let greaterKudu;
let dikdikAntelope;
let barnOwl;
let burrowingOwl;
let ghostBat;
let vampireBat;
let jamaicanFruitBat;
let nileCrocodile;
let falseGharial;
let siameseCrocodile;
let quokka;
let whaleShark;
let raccoon;
let redPanda;
let panda;
let spottedHyena;
let giantAnteater;
let elephant;
let harpyEagle;
let tamarinMonkey;
let africanWildDog;
let ringTailedLemur;
let coati;
let pygmyHippo;
let lion;
let jaguar;
let platypus;
let horse;
let redFox;
let snappingTurtle;
let leatherbackSeaTurtle;
let hammerheadShark;
let asianGiantHornet;
let westernDiamondbackRattleSnake;
let sikaDeer;
let elk;
let chihuahua;
let borzoi;
let numAnimals = 60; //total number of animals to go into array
let animals = [];

//list of themes/aesthetics next!
//setting as strings

// let magical = "magical";
// let horror = "horror";
// let fantasy = "fantasy";
// let scifi = "scifi";
// let pixelated = "pixelated";
// let dreamy = "dreamy";
// let moody = "moody";
// let hopeful = "hopeful";
// let uncannyValley = "uncanny valley";
// let academia = "academia";
// let pastel = "pastel";
// let grunge = "grunge";
// let vintage = "vintage";
// let abstract = "abstract";
// let decora = "decora";
// let neoPop = "neo pop";
// let pokemon = "Pokemon";
// let spring = "spring";
// let summer = "summer";
// let autumn = "autumn";
// let winter = "winter";
// let numThemes = 21; //total number of themes/aesthetics to go into array
//let themes = [];

//so. all that wasn't needed. condensed into lines 94 and 95. oops. leaving as a reminder to self for future string arrays

const themes = ["magical","horror","fantasy","scifi","pixelated","dreamy","sad","cute","uncanny valley",
    "academia","pastel","grunge","vintage","abstract","decora","neo pop","Pokemon","spring","summer","autumn","winter"];
  

//should auto adjust for diff screens? hopefully??
let width = screen.width;
let height = screen.height*(6/7); //gives some space for the top of the browser (search bar + bookmarks bar)

let bgColor = 'white';

let randomR = 0;
let randomG = 0;
let randomB = 0;


//wow okay that was a lot of lets. time to preload into arrays!
function preload() {

  //this took me. so long to figure out. ajkdsklsjdlsjfssfl;dfkdl. needed the ../img/ inside the ('') and the .jpg . i need to lie down orz
  pika = loadImage('../img/pika.jpg');
  
  mallardDuck = loadImage('../img/mallardDuck.jpg');
  houseCat = loadImage('../img/houseCat.jpg');
  stBernard = loadImage('../img/stBernard.jpg');
  whiteTailedDeer = loadImage('../img/whiteTailedDeer.jpg');
  canadaGoose = loadImage('../img/canadaGoose.jpg');
  civet = loadImage('../img/civet.jpg');
  americanCrow = loadImage('../img/americanCrow.jpg');
  siberianTiger = loadImage('../img/siberianTiger.jpg');
  ranchuGoldfish = loadImage('../img/ranchuGoldFish.jpg');
  bubbleEyeGoldfish = loadImage('../img/bubbleEyeGoldfish.jpg');
  bullShark = loadImage('../img/bullShark.jpg');
  greatWhiteShark = loadImage('../img/greatWhiteShark.jpg');
  longTailedChinchilla = loadImage('../img/longTailedChinchilla.jpg');
  africanForestBuffalo = loadImage('../img/africanForestBuffalo.jpg');
  jacobSheep = loadImage('../img/jacobSheep.jpg');
  capybara = loadImage('../img/capybara.jpg');
  grayWolf = loadImage('../img/grayWolf.jpg');
  polarBear = loadImage('../img/polarBear.jpg');
  mountainGoat = loadImage('../img/mountainGoat.jpg');
  ankoleWatusiCow = loadImage('../img/ankoleWatusiCow.jpg');
  damascusGoat = loadImage('../img/damascusGoat.jpg');
  greaterKudu = loadImage('../img/greaterKudu.jpg');
  dikdikAntelope = loadImage('../img/dikdikAntelope.jpg');
  barnOwl = loadImage('../img/barnOwl.jpg');
  burrowingOwl = loadImage('../img/burrowingOwl.jpg');
  ghostBat = loadImage('../img/ghostBat.jpg');
  vampireBat = loadImage('../img/vampireBat.jpg');
  jamaicanFruitBat = loadImage('../img/jamaicanFruitBat.jpg');
  nileCrocodile = loadImage('../img/nileCrocodile.jpg');
  falseGharial = loadImage('../img/falseGharial.jpg');
  siameseCrocodile = loadImage('../img/siameseCrocodile.jpg');
  quokka = loadImage('../img/quokka.jpg');
  whaleShark = loadImage('../img/whaleShark.jpg');
  raccoon = loadImage('../img/raccoon.jpg');
  redPanda = loadImage('../img/redPanda.jpg');
  panda = loadImage('../img/panda.jpg');
  spottedHyena = loadImage('../img/spottedHyena.jpg');
  giantAnteater = loadImage('../img/giantAnteater.jpg');
  elephant = loadImage('../img/elephant.jpg');
  harpyEagle = loadImage('../img/harpyEagle.jpg');
  tamarinMonkey = loadImage('../img/tamarinMonkey.jpg');
  africanWildDog = loadImage('../img/africanWildDog.jpg');
  ringTailedLemur = loadImage('../img/ringTailedLemur.jpg');
  coati = loadImage('../img/coati.jpg');
  pygmyHippo = loadImage('../img/pygmyHippo.jpg');
  lion = loadImage('../img/lion.jpg');
  jaguar = loadImage('../img/jaguar.jpg');
  platypus = loadImage('../img/platypus.jpg');
  horse = loadImage('../img/horse.jpg');
  redFox = loadImage('../img/redFox.jpg');
  snappingTurtle = loadImage('../img/snappingTurtle.jpg');
  leatherbackSeaTurtle = loadImage('../img/leatherbackSeaTurtle.jpg');
  hammerheadShark = loadImage('../img/hammerheadShark.jpg');
  asianGiantHornet = loadImage('../img/asianGiantHornet.jpg');
  westernDiamondbackRattleSnake = loadImage('../img/westernDiamondbackRattleSnake.jpg');
  sikaDeer = loadImage('../img/sikaDeer.jpg');
  elk = loadImage('../img/elk.jpg');
  chihuahua = loadImage('../img/chihuahua.jpg');
  borzoi = loadImage('../img/borzoi.jpg');

  //array of images! pls work now!!!!
  animals = [africanForestBuffalo, africanWildDog, americanCrow, ankoleWatusiCow,asianGiantHornet,
    barnOwl,borzoi,bubbleEyeGoldfish,bullShark,burrowingOwl,canadaGoose,capybara,chihuahua,civet,
    coati,damascusGoat,dikdikAntelope,elephant,elk,falseGharial,ghostBat,giantAnteater,grayWolf,
    greaterKudu,greatWhiteShark,hammerheadShark,harpyEagle,horse,houseCat,jacobSheep,jaguar,
    jamaicanFruitBat,leatherbackSeaTurtle,lion,longTailedChinchilla,mallardDuck,mountainGoat,
    nileCrocodile,panda,pika,platypus,polarBear,pygmyHippo,quokka,raccoon,ranchuGoldfish,redFox,
    redPanda,ringTailedLemur,siameseCrocodile,siberianTiger,sikaDeer,snappingTurtle,spottedHyena,
    stBernard,tamarinMonkey,vampireBat,westernDiamondbackRattleSnake,whaleShark,whiteTailedDeer];

    
}


function setup() {
  createCanvas(width,height);

  let instructions = 'Press spacebar to generate a random art prompt!';
  textSize(22);
  fill(0);
  //stroke(255);
  //strokeWeight(1);
  textAlign(CENTER);
  text(instructions, width/2, height/5); //not centered?? but it's width/2 edit: fixed! with textAlign(CENTER)

  //testing
  // imageMode(CENTER);
  // image(pika, width/2,height/2);


  //text("here!!", 200,200)

  // let rNum = Math.floor(random(themes.length-1));
  // text(themes[rNum],200,200);

  //testing worked!!proof of concept proven! onto the randomize function :D
}

//draw functiion kept looping the keyPressed function! Deleted. :)

function keyPressed(){ // meant to check if the right key is pressed so accidental misclicks won't affect program
  if (keyCode === 32) { //32 is spacebar press
    randomize();
  }
}

//this is the main function for display!!!
function randomize() {

  //Math.floor turns the numbers from floats to integers!! 
  randomR = Math.floor(random(225));
  randomG = Math.floor(random(225));
  randomB = Math.floor(random(225));

  //uses above to give newly randomized color for the background
  background(randomR,randomG,randomB);

  //the RGB print out to color match! has a white rectangle shape background for legibility in case the randomized color makes black text hard to read
  //edit: rectangle now spans across entire screen so theme has a solid bg too.
  fill(255);
  rect(0, height*(1/2)-35, width, 50) 
  let colorText = ("R: " + randomR + "   G: " + randomG + "   B: " + randomB);

  fill(0);

  text(colorText, width*(1/6), height/2); // instructions text turns into rgb text, should be in first third of screen

  //diff size pics?? may go hunting for better resolution + cropping some if time allows
  imageMode(CENTER);
  let randomAnimal = random(animals);
  image(randomAnimal, width/2, height/2);

 //randomize the theme/aesthetic array
  let i = Math.floor(random(0,themes.length-1)); //should give from 0 - 21?
  text(themes[i],width*(3/4),height/2);


}

//i feel like the elmo on fire gif. DONE. TURNING IT IN. YIPPEE.
