const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,log2,log3,log4,pig1,pig2,log,bird;

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,520,70,70);
    box2 = new Box(1200,520,70,70);
    box3 = new Box(1000,420,70,70);
    box4 = new Box(1200,420,70,70);
    box5 = new Box(1100,320,70,70);
    ground = new Ground(800,height,1600,20)
    pig1=new Pig (1100,520,50,50)
    pig2=new Pig (1100,420,50,50)
    log = new Log (1100, 480, 270, PI/2);
    log2 = new Log (1100, 380, 270, PI/2);
    log3 = new Log (1040, 280, 120, PI/4);
    log4 = new Log (1140, 280, 120, -PI/4);
    bird = new Bird (200,280,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}