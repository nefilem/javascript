    class mobYellowBlob {
     
    /**
     * Constructor to create yellow blob mob
     * @param  {Number} xPos - X position on the grid
     * @param  {Number} yPos - Y position on the grid
     */        
    constructor(xPos, yPos, mainContext, mobContext) {
        this._xPos = xPos;
        this._yPos = yPos;        
        this._mainContext = mainContext;
        this._mobContext = mobContext;
    }

    // _objcanvas = document.getElementById("mainCanvas");
    // _mainContext = this._objcanvas.getContext('2d');                

    // _objmobcanvas = document.getElementById("mobDescCanvas");
    // _mobContext = this._objmobcanvas.getContext('2d');                

    _lootTableArray = Array();

    _mobName = "Yellow Blob"; // descriptive name of the mob
    _hitPoints = 100; // how much health the mob has before it dies
    _status = 1; // 1 = alive, 0 = dead

    _damage = 33;

    _aggressive = false; // starts off none agressive, attack it and it will attack back whilst you are near
                         // initial attack will trigger off a timer that calls the attack routine, this will
                         // only stop if the mob dies or the player dies.
    _aggressiveCount = 0;    

    _enemy = null;

    /**
     * Returns the x position in the maze
     */
    xPos() {
        return Number(this._xPos);
    }

    /**     
     * Returns the y position in the maze
     */
    yPos() {
        return Number(this._yPos);        
    } 

    /**
     * @param  {} player
     */
    setAggro(player) {
        _enemy = player;
        _aggressive = true;
    }

    /**
     */
    attackPlayer() {
        if (this._aggressive == true && this._enemy != null) {
            this._enemy.attacked(this._damage);
            if (this._enemy.isAlive() == false) {
                this._aggressive = false;
                this._enemy = null;
            } 
            // the below was going to be added to have the mob auto attack but was causing stack issues
            // this._aggressiveCount -= 1;
            // if(this._aggressiveCount>0) {
            //     window.clearInterval(this._t);
            //     this._t = setInterval(this.attackPlayer(), 50000);
            // } else { window.clearInterval(this._t); }
        }        
        
    }
    
    /**
     * When attacking with a weapon this function is called, calculates whether the resulting damage 
     * kills the mob or not and also updates the descriptive text.
     * @param  {} damage - this is the amount of damage done when attacked, passed from weapon class
     */
    attacked(damage, enemy) {
        this._hitPoints = this._hitPoints - damage;
        this._enemy = enemy;
        this._aggressive = true;
        this._aggressiveCount = 6;
        //this._t = setInterval(this.attackPlayer(), 50000);        
        this.attackPlayer();

        if (this._hitPoints < 1) {
            this._status = 0;
            return "You attack " + this._mobName + " dealing the final blow, it is bereft of life..."
        } else {
            return "You attack " + this._mobName + ", it screams as it loses " + damage + " health points."
        }
    }

    /**
     */
    isAlive() {
        return (this._status == 1?true:false); // return true if status = 1 (mob is alive) or false if status = 0 (mob is dead)
    }
    
    /**
     * @param  {} classObj - item class to add to the loot table for this mob
     */
    createItem(classObj) {
        this._lootTableArray.push(classObj);
    }

    /**
     */
    listItems() {
        this._lootTableArray.forEach(element => { 
            console.log(element.itemName());
        });
    }
    
    /**
     * @param  {} newOwner
     */
    lootItems(newOwner) {
        //return Array.map(this._lootTableArray);
        if (this.isAlive() == true) {
            this.drawMobDescription("The " + this._mobName + " looks at you angrily as you try to loot it's items.");                        
        } else {
            this._lootTableArray.forEach(element => {
                newOwner.putIntoInventory(element);
            });
            this._lootTableArray = Array();
            //this.drawMobDescription("You looted all the items from the slain " + this._mobName);
            newOwner.drawPlayerDescription("You looted all the items from the slain " + this._mobName);
        }
    }

    /**     
     */
    drawMob() {
        
        let mobText = this._mobName;
        if (this._status == 1) {
            this.drawMobAlive(200);
            mobText += " stands menacingly before you with " + this._hitPoints + " health."
        } else { 
            this.drawMobDead(200);
            mobText += " lays dead in front of you.";
        }        

        // this._mobContext.font = "15px Arial";
        // this._mobContext.fillStyle = 'black';        
        // this._mobContext.fillText(mobText, 5, 375);
        this.drawMobDescription(mobText);
    }

    /**
     * @param  {} offset - x offset position to draw mob
     */
    drawMobAlive(offset) {        

        this._mainContext.beginPath();
        this._mainContext.arc(150+offset, 250, 50, 0, 360);
        this._mainContext.fillStyle = 'yellow';
        this._mainContext.fill();
        this._mainContext.lineWidth=2;
        this._mainContext.strokeStyle = 'black';
        this._mainContext.stroke();
    
        this._mainContext.beginPath();
        this._mainContext.arc(150+offset, 200, 25, 0, 360);
        this._mainContext.fillStyle = 'red';
        this._mainContext.fill();
        this._mainContext.lineWidth=2;
        this._mainContext.strokeStyle = 'black';
        this._mainContext.stroke();
    
    }
    
    /**
     * @param  {} offset - allows horizontal positioning on the canvas
     */
    drawMobDead(offset) {        

        this._mainContext.beginPath();
        this._mainContext.arc(150+offset, 250, 50, 0, 360);
        this._mainContext.fillStyle = 'grey';
        this._mainContext.fill();
        this._mainContext.lineWidth=2;
        this._mainContext.strokeStyle = 'black';
        this._mainContext.stroke();
    
        this._mainContext.beginPath();
        this._mainContext.arc(200+offset, 250, 25, 0, 360);
        this._mainContext.fillStyle = 'grey';
        this._mainContext.fill();
        this._mainContext.lineWidth=2;
        this._mainContext.strokeStyle = 'black';
        this._mainContext.stroke();
    
    }
    
    /**
     * @param  {} textToDraw - text to draw in mob canvas area
     */
    drawMobDescription(textToDraw) {

        this.clearMobCanvas();
        this._mobContext.font = "15px Arial";
        this._mobContext.fillStyle = '#000000';        
        this._mobContext.fillText(textToDraw, 5, 15);
    }
    
    /**
     * @param  {} context - pointer to canvas
     */
    clearMobCanvas() {

        // clear the area used by mob text on canvas using clearRect()
            
        this._mobContext.clearRect(0, 0, 600, 100);
        this._mobContext.stroke();
        this._mobContext.beginPath();
    
    };
}