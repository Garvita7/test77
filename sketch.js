const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var ground, monster1, hero, rope;
var groundImage,heroImage;






function preload() {
//preload the images here

groundImage = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

    ground = new Ground(600,400,1200,20);
    hero = new Hero(200,200,20,20);
    rope = new Fly(hero.body,{x: 550, y:50});
    monster1 = new Monster(1095,150,20,20);
    box1 = new Box(900, 100, 40, 40);
    box2 = new Box(900, 100, 40, 40);
    box3 = new Box(900, 100, 40, 40);
    box4 = new Box(900, 100, 40, 40);
    box5 = new Box(900, 100, 40, 40);
    box6 = new Box(900, 100, 40, 40);
    box7 = new Box(800, 100, 40, 40);
    box8 = new Box(800, 100, 40, 40);
    box9 = new Box(800, 100, 40, 40);
    box10 = new Box(800, 100, 40, 40);
    box11 = new Box(800, 100, 40, 40);
    box12 = new Box(800, 100, 40, 40);
    box13 = new Box(700, 100, 40, 40);
    box14 = new Box(700, 100, 40, 40);
    box15 = new Box(700, 100, 40, 40);
    box16 = new Box(700, 100, 40, 40);
    box17 = new Box(700, 100, 40, 40);
    box18 = new Box(700, 100, 40, 40);
    box19 = new Box(700, 100, 40, 40);
    box20 = new Box(700, 100, 40, 40);
  

}

function draw() {
  background(groundImage);
  Engine.update(engine);

      ground.display();
      hero.display();
      rope.display();
      monster1.display();
      box1.display();
      box2.display();
      box3.display();
      box4.display()
      box5.display()
      box6.display()
      box7.display()
      box8.display()
      box9.display()
      box10.display()
      box11.display()
      box12.display()
      box13.display()
      box14.display()
      box15.display()
      box16.display()
      box17.display()
      box18.display()
      box19.display()
      box20.display()

  //hero.addImage(heroImage);

}

function mouseDragged(){

  Matter.Body.setPosition(hero.body , {x:mouseX, y:mouseY});
}

