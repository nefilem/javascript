class playerClass {
    constructor(context) {
        this._context = context;
    }

    _context = null;
    _inventory = Array();
    _hitPoints = 100;
    _maxHitPoints = 100;
    putIntoInventory(item) {
        this._inventory.push(item);
        if (this.checkWinningItem(item) == true) {
            console.log("you win!!");
        };
    }

    checkWinningItem(item) {
        return item.winningItem();
    }

    listItems() {
        // debug function to show that items have moved over
        this._inventory.forEach(element => { 
            console.log(element.itemName());
        });
    }

    get hitPoints() {
        return this._hitPoints;
    }

    set hitPoints(hitPointsValue) {
        this._hitPoints = hitPointsValue;
    }

    maxHitPoints() {
        return this._maxHitPoints;
    }

    useHealthPotion(context) {
        let healthPotionObj = this._inventory.find(obj => obj.itemName() == "Health Potion");
        if (healthPotionObj === undefined)  {
            this.drawPlayerDescription(context, "You do not have a health potion.");                        
        } else {
            healthPotionObj.useItem(context);            
            this._inventory.splice(this._inventory.indexOf(healthPotionObj)); // remove item from inventory
        }
    }

    createItem(classObj) {
        this._inventory.push(classObj);
    }


    /**
     * @param  {} context - pointer to canvas
     * @param  {} textToDraw - text to draw in mob canvas area
     */
    drawPlayerDescription(context, textToDraw) {

        this.clearPlayerCanvas(context);
        context.beginPath();
        context.font = "15px Arial";
        context.fillStyle = 'black';        
        context.fillText(textToDraw, 5, 435);
    }
    
    /**
     * @param  {} context - pointer to canvas
     */
    clearPlayerCanvas(context) {

        // clear the area used by mob text on canvas using clearRect()         
        context.clearRect(0, 420, 600, 500);
        context.beginPath();
    
    };

    attacked(damage) {
        this._hitPoints -= damage;
        let textToDisplay = "";
        textToDisplay += "You were attacked for " + damage + " hit points.";
        if (this._hitPoints < 1) {
            textToDisplay += " You are now dead.";
        }
        this.drawPlayerDescription(this._context, textToDisplay);
    }    

    isAlive() {
        return (this._hitPoints < 1?false:true);
    }
}