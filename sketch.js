const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    polygonImg = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    polygon=Bodies.circle(160,384,20)
    World.add(world,polygon)
    

    ground1=new Ground(600,300,200,30)
    box1=new Box(517,202,20,20)
    box2=new Box(537,202,20,20)
    box3=new Box(557,202,20,20)
    box4=new Box(577,202,20,20)
    box5=new Box(597,202,20,20)
    box6=new Box(617,202,20,20)
    box7=new Box(637,202,20,20)
    box8=new Box(657,202,20,20)
    box9=new Box(677,202,20,20)

    box10=new Box2(617,190,20,20)
    box11=new Box2(537,190,20,20)
    box12=new Box2(557,190,20,20)
    box13=new Box2(577,190,20,20)
    box14=new Box2(597,190,20,20)
    box15=new Box2(637,190,20,20)
    box16=new Box2(657,190,20,20)

    box17=new Box3(557,178,20,20)
    box18=new Box3(577,178,20,20)
    box19=new Box3(597,178,20,20)
    box20=new Box3(617,178,20,20)
    box21=new Box3(637,178,20,20)

    box22=new Box4(577,166,20,20)
    box23=new Box4(597,166,20,20)
    box24=new Box4(617,166,20,20)

    box25=new Box5(597,154,20,20)
    
    ground2=new Ground(980,200,200,30)
    box26=new Box(897,105,20,20)
    box27=new Box(917,105,20,20)
    box28=new Box(937,105,20,20)
    box29=new Box(957,105,20,20)
    box30=new Box(977,105,20,20)
    box31=new Box(997,105,20,20)
    box32=new Box(1017,105,20,20)
    box33=new Box(1037,105,20,20)
    box34=new Box(1057,105,20,20)

    box35=new Box2(917,93,20,20)
    box36=new Box2(937,93,20,20)
    box37=new Box2(957,93,20,20)
    box38=new Box2(977,93,20,20)
    box39=new Box2(997,93,20,20)
    box40=new Box2(1017,93,20,20)
    box41=new Box2(1037,93,20,20)

    box42=new Box3(937,82,20,20)
    box43=new Box3(957,82,20,20)
    box44=new Box3(977,82,20,20)
    box45=new Box3(997,82,20,20)
    box46=new Box3(1017,82,20,20)

    box47=new Box4(957,70,20,20)
    box48=new Box4(977,70,20,20)
    box49=new Box4(997,70,20,20)

    box50=new Box5(977,68,20,20)






sling1=new Sling(this.polygon,{x:300,y:200})

}
function draw(){
 background(0);  
 text(mouseX + ',' + mouseY, 30, 45);

imageMode (CENTER)
image(polygonImg,polygon.position.x,polygon.position.y,50,50)
 Engine.update (engine)
 ground1.display()
 box1.display()
 box2.display()
 box3.display()
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
 box21.display()
 box22.display()
 box23.display()
 box24.display()
 box25.display()
 sling1.display()

 ground2.display()
box26.display()
box27.display()
box28.display()
box29.display()
box30.display()
box31.display()
box32.display()
box33.display()
box34.display()
box35.display()
box36.display()
box37.display()
box38.display()
box39.display()
box40.display()
box41.display()
box42.display()
box43.display()
box44.display()
box45.display()
box46.display()
box47.display()
box48.display()
box49.display()
box50.display()



 
 
 
 

 
 

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling1.fly()
}
function keyPressed(){
    if(keyCode===32){
    sling1.attach(this.polygon)
    }
}