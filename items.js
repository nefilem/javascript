// Need to write a global class for shared item object functions... ie. to display text etc...

class itemMagicalPendant {
    
    /**
     * constructor to create itemMagicalPendant class
     * 
     * @param  {var} owner - pointer to created object, either player or mob class
     * @param  {var} mainContext - pointer to the main world view canvas 
     * @param  {var} playerContext - pointer to player text canvas
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
     * returns the item name as a string
     */
    itemName() {
        return this._itemName;
    }
    
    /**
     * returns flag as to whether item is a winning item, true if it is, false if not
     */
    winningItem() {
        return this._winningItemFlag;
    }
}

class itemHealthPotion {
    
    /**
     * constructor to create itemHealthPotion class
     * 
     * @param  {var} owner - pointer to created object, either player or mob class
     * @param  {var} mainContext - pointer to the main world view canvas 
     * @param  {var} playerContext - pointer to player text canvas           
     */
    constructor(owner, mainContext, playerContext) {        
        this._owner = owner;
        this._mainContext = mainContext;
        this._playerContext = playerContext;
    }

    _itemName = "Health Potion";
    _winningItemFlag = false;
    
    /**
     * called when the user wants to use this item, then interacts with player class to effects changes, won't effect mob class
     */
    useItem() {
        // this item will restore owners health
        this._owner.hitPoints = this._owner.maxHitPoints();
        this.drawItemDescription("You replenish your hit points to your maximum.");
    }
    
    /**
     * returns the name of the item as a string
     */
    itemName() {
        return this._itemName;
    }
    
    /**
     * returns flag as to whether item is a winning item, true if it is, false if not
     */
    winningItem() {
        return this._winningItemFlag;
    }

    /**
     * draws text to player/mob related canvas
     * 
     * @param  {String} textToDraw - text to draw in mob canvas area
     */
     drawItemDescription(textToDraw) {

        this.clearItemCanvas();
        this._playerContext.font = "15px Arial";
        this._playerContext.fillStyle = '#000000';        
        this._playerContext.fillText(textToDraw, 5, 15);
    }
    
    /**
     * Clears the item related canvas 
     */
    clearItemCanvas() {

        // clear the area used by mob text on canvas using clearRect()        
        //this._playerContext.clearRect(0, 420, 600, 500);
        this._playerContext.clearRect(0, 0, this._playerContext.canvas.width, this._playerContext.canvas.height)
        this._playerContext.beginPath();
    
    };

}