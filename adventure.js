// variables setting up the main canvas to draw the world view onto
let objcanvas = document.getElementById("mainCanvas"); 
let context = objcanvas.getContext('2d');                

// variables setting up the map canvas to draw the mini map onto
let objmapcanvas = document.getElementById("mapCanvas");
let mapcontext= objmapcanvas.getContext('2d');                

// variables setting up the room canvas to draw the room related text
let objroomcanvas = document.getElementById("roomDescCanvas");
let roomContext= objroomcanvas.getContext('2d'); 

// variables setting up the player canvas to draw the player related text
let objplayercanvas = document.getElementById("playerDescCanvas");
let playerContext = objplayercanvas.getContext('2d');

// variables setting up the mob canvas to draw the mob related text
let objmobcanvas = document.getElementById("mobDescCanvas");
let mobContext = objmobcanvas.getContext('2d');    

let mazeDirection = 0; // 0 is north, 1 is east, 2 is south, 3 is west.

// x and y position for the player within the world
let mazePosX = 1;
let mazePosY = 1;
let mazePosZ = 1; // would be which floor effectively if there were stairs.

 // setup a test mob, test items, test player, weapon for player to use and a health potion
 let enemy = new mobYellowBlob(7, 1, context, mobContext);
 enemy.createItem(new itemMagicalPendant(enemy, context, playerContext));
 let player = new playerClass(context, playerContext);
 let weapon = new weaponWoodenSword(player);
 player.createItem(new itemHealthPotion(player, context, playerContext));

// initial drawing of scene
clearCanvas();
clearMapCanvas();
drawScene();
drawMap();

// try to focus on canvas every time browser gets focus
$(function() {
    $('#mainCanvas').focus();
});

//  setup key bindings for controlling the game
$('#mainCanvas').on('keydown', function(event) {    
    let mazeCoordsArr = [];
    let ignoreRedraw = false; // this is so we can skip scene draw at bottom of this in certain circumstances.

    if (player.isAlive() == true) {

        switch(event.keyCode)
        {
            case 72: // h
                player.useHealthPotion();
                ignoreRedraw = true;
                break;
            case 82: // r
                // loot the enemy
                if (enemy.xPos() == mazePosX && enemy.yPos() == mazePosY && !enemy.isAlive())
                {
                    enemy.lootItems(player);
                }
                ignoreRedraw = true;
                break;
            case 32:  // [space bar]
                // attack the enemy!!
                if (enemy.xPos() == mazePosX && enemy.yPos() == mazePosY && enemy.isAlive() == true) {
                    enemy.drawMobDescription(weapon.attack(enemy));
                }
                //ignoreRedraw = true;
                break;
            case 87:
                mazeCoordsArr = returnNewCoords(mazePosX, mazePosY, mazeDirection, 0);
                //alert("w pressed");                                
                if ((mazeCoordsArr[1]) > 0) {                                                
                    let tmpVar = mazeArr[mazeCoordsArr[1]][mazeCoordsArr[0]];
                    // 1 is wall, 2 is closed door
                    if (tmpVar != 1 && tmpVar != 2) {
                        mazePosX = mazeCoordsArr[0];
                        mazePosY = mazeCoordsArr[1];
                    } 
                }
                break;

            case 68:
                mazeCoordsArr = returnNewCoords(mazePosX, mazePosY, mazeDirection, 1);
                //alert("d pressed");
                if ((mazeCoordsArr[0]) < 20) {                        
                    let tmpVar = mazeArr[mazeCoordsArr[1]][mazeCoordsArr[0]];
                    // 1 is wall, 2 is closed door
                    if (tmpVar != 1 && tmpVar != 2) {
                        mazePosX = mazeCoordsArr[0];
                        mazePosY = mazeCoordsArr[1];
                    } 
                }
                break;

            case 65:
                mazeCoordsArr = returnNewCoords(mazePosX, mazePosY, mazeDirection, 3);
                //alert("a pressed");
                if ((mazeCoordsArr[0]) > 0) {                        
                    let tmpVar = mazeArr[mazeCoordsArr[1]][mazeCoordsArr[0]];
                    // 1 is wall, 2 is closed door
                    if (tmpVar != 1 && tmpVar != 2) {
                        mazePosX = mazeCoordsArr[0];
                        mazePosY = mazeCoordsArr[1];
                    } 
                }
                break;

            case 83:
                mazeCoordsArr = returnNewCoords(mazePosX, mazePosY, mazeDirection, 2);
                //alert("s pressed");
                if ((mazeCoordsArr[1]) < 20) {
                    let tmpVar = mazeArr[mazeCoordsArr[1]][mazeCoordsArr[0]];
                    // 1 is wall, 2 is closed door
                    if (tmpVar != 1 && tmpVar != 2) {
                        mazePosX = mazeCoordsArr[0];
                        mazePosY = mazeCoordsArr[1];
                    } 
                }
                break;

            case 69:
                // q turn left
                mazeDirection++;
                if (mazeDirection > 3) { mazeDirection = 0;};
                break;

            case 81:
                // e turn right
                --mazeDirection;
                if (mazeDirection < 0) { mazeDirection = 3;};
                break;
            
            default:
        }

        //$('#xpos').innerhtml = mazePosX;
        //$('#ypos').innerhtml = mazePosY;
        //console.log("X:" + mazePosX + ", Y:" + mazePosY + ", Direction:" + mazeDirection);

        if (ignoreRedraw == false) {
            if (player.hasWon()) {
                drawWinningScene();
            } else {
                clearCanvas();
                drawScene();
                clearMapCanvas();
                drawMap();
            }
        } 
    } else {
        if (!player.isAlive()) {
            drawLosingScene();
        } 
    }
});