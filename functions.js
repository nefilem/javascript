/**
 * @param  {} buttonID - the id for the button that you want to move using, ie. q, w, e, a, s, d
 */
 function moveViaButtons(buttonID) {
    let mazeCoordsArr = [];

    switch(buttonID)
    {
        case "w":
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

        case "d":
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

        case "a":
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

        case "s":
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

        case "e":
            // q turn left
            mazeDirection++;
            if (mazeDirection > 3) { mazeDirection = 0;};
            break;

        case "q":
            // e turn right
            --mazeDirection;
            if (mazeDirection < 0) { mazeDirection = 3;};
            break;
        
        default:
    }
    
    clearCanvas();
    drawScene();
    clearMapCanvas();
    drawMap();
}

/**
 */
function drawScene() {
    let tmpVarLeft = -1;
    let tmpVar = 0;
    let tmpVarRight = -1;
    switch (mazeDirection) {
        case 0:                    
            tmpVar = mazeArr[mazePosY-1][mazePosX];
            if ((mazePosX-1)>-1) {tmpVarLeft = mazeArr[mazePosY-1][mazePosX-1];} else tmpVarLeft = -1;
            if ((mazePosX+1)<21) {tmpVarRight = mazeArr[mazePosY-1][mazePosX+1];} else tmpVarRight = -1;
            break;
        case 1:
            tmpVar = mazeArr[mazePosY][mazePosX+1];
            if ((mazePosY-1)>-1) {tmpVarLeft = mazeArr[mazePosY-1][mazePosX+1];} else tmpVarLeft = -1;
            if ((mazePosY+1)<21) {tmpVarRight = mazeArr[mazePosY+1][mazePosX+1];} else tmpVarRight = -1;
            break;
        case 2:
            tmpVar = mazeArr[mazePosY+1][mazePosX];
            if ((mazePosX+1)<21) {tmpVarLeft = mazeArr[mazePosY+1][mazePosX+1];} else tmpVarLeft = -1;
            if ((mazePosX-1)>-1) {tmpVarRight = mazeArr[mazePosY+1][mazePosX-1];} else tmpVarRight = -1;
            break;
        case 3:
            tmpVar = mazeArr[mazePosY][mazePosX-1];
            if ((mazePosY+1)<21) {tmpVarLeft = mazeArr[mazePosY+1][mazePosX-1];} else tmpVarLeft = -1;
            if ((mazePosY-1)>-1) {tmpVarRight= mazeArr[mazePosY-1][mazePosX-1];} else tmpVarRight = -1;
            break;
        default:
    }
    switch (tmpVar)
    {
        case 0:
            // draw nothing, empty space
            break;
        case 1:
            drawWall(200);
            break;
        case 2:
            drawDoor(200);
            break;
        case 3:
            drawOpenDoor(200);
            break;
        case 4:
            break;
        default:
            //again draw nothing                
    }
    switch (tmpVarLeft)
    {
        case 0:
            // draw nothing, empty space
            break;
        case 1:
            drawWall(0);
            break;
        case 2:
            drawDoor(0);
            break;
        case 3:
            drawOpenDoor(0);
            break;
        case 4:
            break;
        default:
            //again draw nothing                
    }

    switch (tmpVarRight)
    {
        case 0:
            // draw nothing, empty space
            break;
        case 1:
            drawWall(400);
            break;
        case 2:
            drawDoor(400);
            break;
        case 3:
            drawOpenDoor(400);
            break;
        case 4:
            break;
        default:
            //again draw nothing                
    }

    drawDescription(mazePosX, mazePosY);

    // check if we have a mob in front of us
    if (enemy.xPos() == mazePosX && enemy.yPos() == mazePosY) {
        enemy.drawMob(context);        
    }    

}

/**
 * @param  {} xPos
 * @param  {} yPos
 */
function drawDescription(xPos, yPos)
{
    // checks for description in mazeDescriptionIDs, if the value is 0 no description is available.
    let mazeID = 0;

    mazeID = mazeRoomDescriptionsIDs[yPos][xPos];

    roomContext.clearRect(0, 0, roomContext.canvas.width, roomContext.canvas.height)

    roomContext.font = "15px Arial";
    roomContext.fillStyle = '#000000';
    let textOffset = 15;

    if (mazeID != 0) {
        //context.fillText(mazeRoomDescriptions[mazeID], 5, 325+textOffset);                
        mazeRoomDescriptions[mazeID].forEach((item, index, array) => { 
            /*array.forEach((item) => { 
                context.fillText(item, 5, 325+textOffset);
                textOffset+=20;
            } */
            roomContext.fillText(item, 5, 0+textOffset);
            textOffset+=20;
        });
    } else {
        roomContext.fillText("No description", 5, 0);
    }
}

/**
 * @param  {} mazePosXin
 * @param  {} mazePosYin
 * @param  {} mazeOrientationin
 * @param  {} moveDirectionin
 */
function returnNewCoords(mazePosXin, mazePosYin, mazeOrientationin, moveDirectionin) {

    let mazeCoordsArr = [];
    switch(mazeOrientationin)
    {
        case 0: // north
            switch(moveDirectionin)
            {
                case 0: //forward
                    mazeCoordsArr[0] = mazePosXin;
                    mazeCoordsArr[1] = mazePosYin-1;
                    break;
                case 1: //right                            
                    mazeCoordsArr[0] = mazePosXin+1;
                    mazeCoordsArr[1] = mazePosYin;
                    break;
                case 2: //backwards
                    mazeCoordsArr[0] = mazePosXin;
                    mazeCoordsArr[1] = mazePosYin+1;
                    break;
                case 3: //left                            
                    mazeCoordsArr[0] = mazePosXin-1;
                    mazeCoordsArr[1] = mazePosYin;
                    break;
                default:
            }
            break;
        case 1: //east
        
            switch(moveDirectionin)
            {
                case 0: //forward
                    mazeCoordsArr[0] = mazePosXin+1;
                    mazeCoordsArr[1] = mazePosYin;
                    break;
                case 1: //right                            
                    mazeCoordsArr[0] = mazePosXin;
                    mazeCoordsArr[1] = mazePosYin+1;
                    break;
                case 2: //backwards
                    mazeCoordsArr[0] = mazePosXin-1;
                    mazeCoordsArr[1] = mazePosYin;
                    break;
                case 3: //left                            
                    mazeCoordsArr[0] = mazePosXin;
                    mazeCoordsArr[1] = mazePosYin-1;
                    break;
                default:
            }
            break;
        case 2://south
            switch(moveDirectionin)
            {
                case 0: //forward
                    mazeCoordsArr[0] = mazePosXin;
                    mazeCoordsArr[1] = mazePosYin+1;
                    break;
                case 1: //right                            
                    mazeCoordsArr[0] = mazePosXin-1;
                    mazeCoordsArr[1] = mazePosYin;
                    break;
                case 2: //backwards
                    mazeCoordsArr[0] = mazePosXin;
                    mazeCoordsArr[1] = mazePosYin-1;
                    break;
                case 3: //left                            
                    mazeCoordsArr[0] = mazePosXin+1;
                    mazeCoordsArr[1] = mazePosYin;
                    break;
                default:                        

            }
            break;
        case 3://west
            switch(moveDirectionin)
            {
                case 0: //forward
                    mazeCoordsArr[0] = mazePosXin-1;
                    mazeCoordsArr[1] = mazePosYin;
                    break;
                case 1: //right                            
                    mazeCoordsArr[0] = mazePosXin;
                    mazeCoordsArr[1] = mazePosYin-1;
                    break;
                case 2: //backwards
                    mazeCoordsArr[0] = mazePosXin+1;
                    mazeCoordsArr[1] = mazePosYin;
                    break;
                case 3: //left                            
                    mazeCoordsArr[0] = mazePosXin;
                    mazeCoordsArr[1] = mazePosYin+1;
                    break;
                default:
            }
            break;
        default:
            
    }

    return mazeCoordsArr;
}

/**
 */
function clearCanvas() {

    // clear the canvas using clearRect()

    context.beginPath();
    context.clearRect(0, 0, 600, 600);
    context.stroke();

};

/**
 */
function clearMapCanvas() {

    // clear the canvas using clearRect()

    mapcontext.beginPath();
    mapcontext.clearRect(0, 0, 200, 200);
    mapcontext.stroke();

};

/**
 */
function drawMap()
{
    mazeArr.forEach((itemY, indexY, arrayY) => itemY.forEach((itemX, indexX, arrayX) => drawMapBlock(indexX, indexY)));
}

/**
 * @param  {} posX
 * @param  {} posY
 */
function drawMapBlock(posX, posY)
{
    mapcontext.beginPath();
    switch (mazeArr[posY][posX])
    {
        case 0:
            //nothing to draw
            break;
        case 1:
            //wall
            mapcontext.rect(posX*10, posY*10, 10, 10);                    
            mapcontext.lineWidth = 1;
            mapcontext.fillStyle = 'black';
            mapcontext.fill();
            mapcontext.strokeStyle = 'black';
            mapcontext.stroke();
            break;
    }
    // draw your position on map plus direction
    mapcontext.beginPath();
    mapcontext.rect(mazePosX*10, mazePosY*10, 10, 10);
    mapcontext.fillStyle = 'yellow';
    mapcontext.fill();
    mapcontext.strokeStyle='yellow';
    mapcontext.stroke();

    mapcontext.beginPath();
    switch (mazeDirection)
    {
        case 0:
            mapcontext.rect(mazePosX*10, mazePosY*10, 10, 2);
            break;
        case 1:
            mapcontext.rect((mazePosX*10)+8, mazePosY*10, 2, 10);
            break;
        case 2:
            mapcontext.rect(mazePosX*10, (mazePosY*10)+8, 10, 2);
            break;
        case 3:
            mapcontext.rect(mazePosX*10, mazePosY*10, 2, 10);
            break;
        default:
    }
    mapcontext.fillStyle = 'red';
    mapcontext.fill();
    mapcontext.strokeStyle='red';
    mapcontext.stroke();

}

/**
 * @param  {} offset
 */
function drawOpenDoor(offset) {
    
    context.beginPath();
    context.rect(0+offset,100,200,200);
    context.lineWidth=2;
    context.strokeStyle = 'black';
    context.stroke();

    context.beginPath();
    context.rect(50+offset,150,100,150);                    
    context.lineWidth=2;
    context.strokeStyle = 'black';
    context.stroke();

    context.beginPath();
    context.rect(50+offset,150,10,150);        
    context.fillStyle = "blue";
    context.fill();
    context.lineWidth=2;
    context.strokeStyle = 'black';
    context.stroke();

    context.beginPath();
    context.arc(offset+45,225,5,2 * Math.PI, false);        
    context.fillStyle = "white";
    context.fill();
    context.lineWidth=2;
    context.strokeStyle = 'black';
    context.stroke();

}

/**
 * @param  {} offset
 */
function drawDoor(offset) {

    context.beginPath();
    context.rect(0+offset,100,200,200);
    context.lineWidth=2;
    context.strokeStyle = 'black';
    context.stroke();

    context.beginPath();
    context.rect(50+offset,150,100,150);        
    context.fillStyle = "blue";
    context.fill();
    context.lineWidth=2;
    context.strokeStyle = 'black';
    context.stroke();

    context.beginPath();
    context.arc(140+offset,225,5,2 * Math.PI, false);        
    context.fillStyle = "white";
    context.fill();
    context.lineWidth=2;
    context.strokeStyle = 'black';
    context.stroke();
}

/**
 * @param  {} offset
 */
function drawWall(offset) {

    context.beginPath();
    context.rect(0+offset,100,200,200);
    context.lineWidth=2;
    context.strokeStyle = 'black';
    context.stroke();

}

/**
 */
function drawWinningScene() {
    //this.clearMobCanvas();
    context.font = "99px Arial";
    context.fillStyle = '#000000';        
    context.fillText("You Won!!!", 5, 100);
}

/**
 */
function drawLosingScene() {
    context.font = "99px Arial";
    context.fillStyle = '#000000';        
    context.fillText("You Lost!!!", 5, 100);
}
