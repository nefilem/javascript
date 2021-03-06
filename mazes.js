
// This array stores the maze layout, each number represents a block type, ie. 1 is a plain wall, 2 is a closed door, 3 is an open door.
        let mazeArr = new Array();
        mazeArr[0]  = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
        mazeArr[1]  = new Array(1,0,0,0,0,1,0,0,0,0,2,0,0,0,0,0,0,0,0,1);
        mazeArr[2]  = new Array(1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1);
        mazeArr[3]  = new Array(1,1,1,1,0,1,1,3,1,1,1,0,0,0,1,0,0,0,0,1);
        mazeArr[4]  = new Array(1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1);
        mazeArr[5]  = new Array(1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1);
        mazeArr[6]  = new Array(1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1);
        mazeArr[7]  = new Array(1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1);
        mazeArr[8]  = new Array(1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);
        mazeArr[9]  = new Array(1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);
        mazeArr[10] = new Array(1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);
        mazeArr[11] = new Array(1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);
        mazeArr[12] = new Array(1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);
        mazeArr[13] = new Array(1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);
        mazeArr[14] = new Array(1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);
        mazeArr[15] = new Array(1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1);
        mazeArr[16] = new Array(1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1);
        mazeArr[17] = new Array(1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1);
        mazeArr[18] = new Array(1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);
        mazeArr[19] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

// This array stores each squares descriptive text pointer, each number is a pointer to a descriptive text within the mazeRoomDescriptions array.        
        let mazeRoomDescriptionsIDs = Array();
        mazeRoomDescriptionsIDs[0]  = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        mazeRoomDescriptionsIDs[1]  = Array(0, 1, 1, 1, 1, 0, 6, 6, 6, 7,14, 2, 2, 2,10,11,11,11,11, 0);
        mazeRoomDescriptionsIDs[2]  = Array(0, 1, 1, 1, 1, 0, 6, 8, 6, 6, 2, 2, 2, 2, 0,11,11,11,11, 0);
        mazeRoomDescriptionsIDs[3]  = Array(0, 0, 0, 0, 5, 0, 0, 9, 0, 0, 2, 2, 2, 2, 0,11,11,11,11, 0);
        mazeRoomDescriptionsIDs[4]  = Array(0,14,15, 0, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 0,11,11,11,11, 0);
        mazeRoomDescriptionsIDs[5]  = Array(0,14, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,11,11,11,11, 0);
        mazeRoomDescriptionsIDs[6]  = Array(0,14, 0, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,11,11,11,11, 0);
        mazeRoomDescriptionsIDs[7]  = Array(0,14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12, 0);
        mazeRoomDescriptionsIDs[8]  = Array(0,14, 0,17,16,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 0);
        mazeRoomDescriptionsIDs[9]  = Array(0,14, 0,17, 0,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 0);
        mazeRoomDescriptionsIDs[10] = Array(0,14, 0,17, 0,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 0);
        mazeRoomDescriptionsIDs[11] = Array(0,14, 0,17, 0,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 0);
        mazeRoomDescriptionsIDs[12] = Array(0,14, 0,17, 0,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 0);
        mazeRoomDescriptionsIDs[13] = Array(0,14, 0,17, 0,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 0);
        mazeRoomDescriptionsIDs[14] = Array(0,14, 0,17, 0,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 0);
        mazeRoomDescriptionsIDs[15] = Array(0,14, 0,17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14, 0);
        mazeRoomDescriptionsIDs[16] = Array(0,14, 0,17,17,17,17,17,17,17,17,17,17,17,17,17,18, 0,14, 0);
        mazeRoomDescriptionsIDs[17] = Array(0,14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14, 0);
        mazeRoomDescriptionsIDs[18] = Array(0,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14, 0);
        mazeRoomDescriptionsIDs[19] = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// This array stores each descriptive text relating to the pointers setup in the mazeRoomDescriptionsIDs array        
        let mazeRoomDescriptions = Array();
        mazeRoomDescriptions[0]  = Array("");
        mazeRoomDescriptions[1]  = Array("Before you is a darkly lit entry hall, the floors are very dusty.");
        mazeRoomDescriptions[2]  = Array("You stand in the reception room, more lighting in this room reveals gold tabbards", "hanging from the walls.");
        mazeRoomDescriptions[3]  = Array("You stand in the reception room, nearby a large open door reveals a dimly lit room within.");
        mazeRoomDescriptions[4]  = Array("A small alcove within the reception room.");
        mazeRoomDescriptions[5]  = Array("You are in a corridor between rooms.");
        mazeRoomDescriptions[6]  = Array("You stand in a dimly lit room with two doors, one to the south and one to the east,", "the door to the east is locked but the one to the south leads to the reception room.");
        mazeRoomDescriptions[7]  = Array("You stand next to a locked door in the small dimly lit room, the door is locked with", "no visible means of unlocking it");
        mazeRoomDescriptions[8]  = Array("You stand before an open door that leads to the reception room, the light from the","reception room casts shadows into the small room you stand in.");
        mazeRoomDescriptions[9]  = Array("You stand in the doorway, to the north is a small room and to the south the reception", "room, the small room to the north is dimly lit.");
        mazeRoomDescriptions[10] = Array("To the east you can see another room, much the same as the one to the west but smaller,", "this room has rows of armour lined up along each side.");
        mazeRoomDescriptions[11] = Array("Before you rows of armour are lined up along each side of the room.");
        mazeRoomDescriptions[12] = Array("The smaller armour exhibition room to the north is dwarfed by the room to the south,", "this room is the main hall, a large table can be seen in the centre.");
        mazeRoomDescriptions[13] = Array("The main hall, this room is huge, four chandeliers can be seen hanging from the roof,", "the mighty oak beams criss crossing the ceiling are awe inspiring.", "A large table can be seen in the centre of the room.");
        mazeRoomDescriptions[14] = Array("You are on a very long corridor, the lack of torches along the wall make this a very","dark area, many flickering shadows play tricks with your mind.");
        mazeRoomDescriptions[15] = Array("You stand in a dark alcove, echoes from along the corridor along with the flickering", "shadows give you a heightened sense of foreboding.");
        mazeRoomDescriptions[16] = Array("Before you is a corridor lined with white marble panels, torches adorn the walls.");
        mazeRoomDescriptions[17] = Array("Walking along the corridor it seems as if it invites you to carry on towards the end.");
        mazeRoomDescriptions[18] = Array("Here at the end of the marble panelled corridor afixed to the wall is a huge painting","of a regal figure.");        

       