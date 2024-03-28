
var gorrilla_image,gorrilla_1,gorrilla_2,gorrilla_3;
var player_image,player;

var background_image,background_bg;
var ground,ground_2;

function preload() {

    gorrilla_image = loadImage("./assets/Gorrilla.png");
    player_image = loadImage("./assets/Player.png");
    background_image = loadImage("./assets/Background.png");

}

function setup() {

    createCanvas(1530,740);

    background_bg = createSprite(0,369,1550,750);
    background_bg.addImage(background_image);

    //Super_Gorrilla
    gorrilla_1 = createSprite(300,630,50,35);
    gorrilla_1.addImage(gorrilla_image);
    gorrilla_1.scale = 2;
    
    //Great_Gorrilla
    gorrilla_2 = createSprite(150,610,50,35);
    gorrilla_2.addImage(gorrilla_image);
    gorrilla_2.scale = 1.5;

    //Best_Gorrilla
    gorrilla_3 = createSprite(40,620,50,35);
    gorrilla_3.addImage(gorrilla_image);
    gorrilla_3.scale = 1;

    //Player
    player = createSprite(500,610,50,35);
    player.addImage(player_image);
    player.scale = 0.3;
    player.setCollider("circle",0,0,140);

    //Ground
    ground = createSprite(200,740,1800,30)
    ground.visible=false;

    ground2 = createSprite(200,640,1800,30)
    ground2.visible=false;

}

function draw() {

    background(background_image);

    gorrilla_1.collide(ground);
    gorrilla_2.collide(ground);
    gorrilla_3.collide(ground);
    player.collide(ground2);
    
    drawSprites();

}