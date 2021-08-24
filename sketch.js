const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   class ComuputerBase{
     constructor(x,y,width,height){
       var options={
         isStatic:true
       };
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
       this.image=loadImage("./assets/base2.png");

       World.add(world,this.body);
     }
   }

   playerBase=newPlayerBase(300,random(450,height-300),180,150);
   player=newPlayer(285,playerBase.body.postion.y-153,50,180)


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   display(){ 
     var pos=this.body.position
     var angle=this.body.angle

     Push();
     Translate(pos.x,pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image,0,0,this.width,this.height);

     Pop();
}
  


   //display Player and computerplayer


}
