const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var asteroid1, asteroid2, asteroid3, asteroid4;
var backgroundImg,logoBackground, earth;
var enemyLaser, enemyShip;
var laser,spaceship;
var planet1, planet2, planet3, planet4, planet5, planet6, planet7, planet8, planet9, planet10, planet11;

var form,player,game;

var obstaclesGroup;
var planetsGroup;
var earthGroup;

var gameState = "start";

function preload (){

    asteroid1 = loadImage("Sprites/Asteroid (1).png");
    asteroid2 = loadImage("Sprites/Asteroid (2).png");
    asteroid3 = loadImage("Sprites/Asteroid (3).png");
    asteroid4 = loadImage("Sprites/Asteroid (4).png");

    backgroundImg = loadImage("Sprites/background.jpg");
    logoBackground = loadImage("Sprites/logoBackground.png")

    earth = loadImage("Sprites/earth.png");

    enemyLaser = loadImage("Sprites/EnemyLaser.png");
    enemyShip = loadImage("Sprites/EnemyShip.png");

    laser = loadImage("Sprites/laser.png");
    spaceship = loadImage("Sprites/spaceship.png");

    planet1 = loadImage("Sprites/planet(1).png");
    planet2 = loadImage("Sprites/planet(2).png");
    planet3 = loadImage("Sprites/planet(3).png");
    planet4 = loadImage("Sprites/planet(4).png");
    planet5 = loadImage("Sprites/planet(5).png");
    planet6 = loadImage("Sprites/planet(6).png");
    planet7 = loadImage("Sprites/planet(7).png");
    planet8 = loadImage("Sprites/planet(8).png");
    planet9 = loadImage("Sprites/planet(9).png");
    planet10 = loadImage("Sprites/planet(10).png");
    planet11 = loadImage("Sprites/planet(11).png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


   
}

function draw(){
    Engine.update(engine);

    if(gameState === "start"){
    background(logoBackground);
    textSize(35);
    fill("white");
    strokeWeight(10);
    text("Press Space to Continue" ,400,325)

    if(keyCode === 32){
        gameState = "story"
    }
    }
    
    else if(keyCode === 32 && gameState === "story"){
        background(backgroundImg)
        textSize(15)
        fill("white")
        text("You wake up, to a familiar voice voice telling you to get up. You open you eyes and see its your friend Yuri! You and Yuri will embark on an" , 125,165);
        text("adventure back to Earth and on the way, face a few obstacles!", 375,200);
        text("Use the UP and DOWN arrow Keys to control your ship and get back to Earth. To fire lasers use the SPACE key." , 175,235);
        text("Goodluck Captain!" , 500,270);

        if(keyCode === 32){
            gameState = "play"
        }

    }


}
      