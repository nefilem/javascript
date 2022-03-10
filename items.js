// Need to write a global class for shared item object functions... ie. to display text etc...

class itemMagicalPendant {
    
    /**
     * @param  {} owner
     * @param  {} mainContext
     * @param  {} playerContext
     */
    constructor(owner, mainContext, playerContext) {        
        this._owner = owner;
        this._mainContext = mainContext;
        this._playerContext = playerContext;
    }

    // _objcanvas = document.getElementById("mainCanvas");
    // _mainContext = this._objcanvas.getContext('2d');                

    // _objplayercanvas = document.getElementById("playerDescCanvas");
    // _playerContext = this._objplayercanvas.getContext('2d');          

    _itemName = "Magical Pendant";
    _winningItemFlag = true;
    
    /**
     */
    itemName() {
        return this._itemName;
    }
    
    /**
     */
    winningItem() {
        return this._winningItemFlag;
    }
}

class itemHealthPotion {
    
    /**
     * @param  {} owner
     * @param  {} mainContext
     * @param  {} playerContext
     */
    constructor(owner, mainContext, playerContext) {        
        this._owner = owner;
        this._mainContext = mainContext;
        this._playerContext = playerContext;
    }

    _itemName = "Health Potion";
    _winningItemFlag = false;
    
    /**
     */
    useItem() {
        // this item will restore owners health
        this._owner.hitPoints = this._owner.maxHitPoints();
        this.drawItemDescription("You replenish your hit points to your maximum.")
    }
    
    /**
     */
    itemName() {
        return this._itemName;
    }
    
    /**
     */
    winningItem() {
        return this._winningItemFlag;
    }

    /**
     * @param  {String} textToDraw - text to draw in mob canvas area
     */
     drawItemDescription(textToDraw) {

        this.clearItemCanvas();
        this._playerContext.font = "15px Arial";
        this._playerContext.fillStyle = '#000000';        
        this._playerContext.fillText(textToDraw, 5, 15);
    }
    
    /**
     */
    clearItemCanvas() {

        // clear the area used by mob text on canvas using clearRect()        
        //this._playerContext.clearRect(0, 420, 600, 500);
        this._playerContext.clearRect(0, 0, this._playerContext.canvas.width, this._playerContext.canvas.height)
        this._playerContext.beginPath();
    
    };

}