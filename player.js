class playerClass {
    /**
     * 
     * @param  {var} mainContext - pointer to the main context (canvas)
     * @param  {var} playerContext - pointer to the player description context (canvas)
     */
    constructor(mainContext, playerContext) {        
        this._mainContext = mainContext;
        this._playerContext = playerContext;
    }

    // _objcanvas = document.getElementById("mainCanvas");
    // _mainContext = this._objcanvas.getContext('2d');                

    // _objplayercanvas = document.getElementById("playerDescCanvas");
    // _playerContext = this._objplayercanvas.getContext('2d');   

    _winFlag = false;
    _inventory = Array();
    _hitPoints = 100;
    _maxHitPoints = 100;
    
    /**
     * push the given item (via item class) into the class variable _inventory array.
     * 
     * @param  {var} item - item class
     */
    putIntoInventory(item) {
        this._inventory.push(item);
        if (this.checkWinningItem(item) == true) {
            // flag player as winning the game
            this._winFlag = true;
        };
    }
    
    /**
     * Returns the class variable _winFlag value, this determines whether the player has won or not yet. True = has won, false = hasn't won yet.
     */
    hasWon() {
        return this._winFlag;
    }
    
    /**
     * Returns true if the item checked is an item required to win the game, false if it isn't.
     * 
     * @param  {var} item - item class
     */
    checkWinningItem(item) {
        return item.winningItem();
    }
        
    /**
     * Debug function to list the contents of the inventory, could be extended further to use as
     * player based function to display contents of the inventory.
     */
    listItems() {
        // debug function to show that items have moved over
        this._inventory.forEach(element => { 
            console.log(element.itemName());
        });
    }
        
    /**
     * Returns the class variable _hitPoints value.
     */
    get hitPoints() {
        return this._hitPoints;
    }

    /**
     * Sets the value of the class variable _hitPoints
     * 
     * @param  {Number} hitPointsValue - value to set the _hitPoints variable to
     */
    set hitPoints(hitPointsValue) {
        this._hitPoints = hitPointsValue;
    }

    // Returns the _maxHitPoints value.
    /**
     */
    maxHitPoints() {
        return this._maxHitPoints;
    }

    /**
     * Uses a health potion item (from item classes) if player has one in its inventory, otherwise displays message saying no health potion was found.
     */
    useHealthPotion() {
        let healthPotionObj = this._inventory.find(obj => obj.itemName() == "Health Potion");
        if (healthPotionObj === undefined)  {
            this.drawPlayerDescription("You do not have a health potion.");                        
        } else {
            healthPotionObj.useItem();            
            this._inventory.splice(this._inventory.indexOf(healthPotionObj)); // remove item from inventory
        }
    }
        
    /**
     * Adds (via push) the passed in object created from the item class to the _inventory array.
     * 
     * @param  {var} classObj - item class 
     */
    createItem(classObj) {
        this._inventory.push(classObj);
    }
    
    /**
     * Renders the text input to this function to the player canvas
     * 
     * @param  {String} textToDraw - text to draw in mob canvas area
     */
    drawPlayerDescription(textToDraw) {

        this.clearPlayerCanvas();
        this._playerContext.beginPath();
        this._playerContext.font = "15px Arial";
        this._playerContext.fillStyle = 'black';        
        this._playerContext.fillText(textToDraw, 5, 15);
    }
    
    /**     
     * Clears the canvas used to display player relevant text
     */
    clearPlayerCanvas() {

        // clear the area used by mob text on canvas using clearRect()         
        this._playerContext.clearRect(0, 0, 600, 100);
        this._playerContext.beginPath();
    
    };
    
    /**
     * Function called when attacked by an enemy created via mob class
     * 
     * @param  {Number} damage - amount of damage done during this attack
     */
    attacked(damage) {
        this._hitPoints -= damage;
        let textToDisplay = "";
        textToDisplay += "You were attacked for " + damage + " hit points. You have " + String(this._hitPoints) + " health left.";
        if (this._hitPoints < 1) {
            textToDisplay += " You are now dead.";
        }
        this.drawPlayerDescription(textToDisplay);
    }    
        
    /**
     * Returns status of player, false is dead, true is alive.
     */
    isAlive() {
        return (this._hitPoints < 1?false:true);
    }
}