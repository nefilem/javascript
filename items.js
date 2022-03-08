class itemMagicalPendant {
    constructor(owner) {        
        this._owner = owner;
    }
    _itemName = "Magical Pendant";
    _winningItemFlag = true;

    itemName() {
        return this._itemName;
    }

    winningItem() {
        return this._winningItemFlag;
    }
}

class itemHealthPotion {
    constructor(owner) {
        this._owner = owner;
    }

    _itemName = "Health Potion";
    _winningItemFlag = false;

    useItem(context) {
        // this item will restore owners health
        this._owner.hitPoints = this._owner.maxHitPoints();
        this.drawItemDescription(context, "You replenish your hit points to your maximum.")
    }

    itemName() {
        return this._itemName;
    }

    winningItem() {
        return this._winningItemFlag;
    }

    /**
     * @param  {} context - pointer to canvas
     * @param  {} textToDraw - text to draw in mob canvas area
     */
     drawItemDescription(context, textToDraw) {

        this.clearItemCanvas(context);
        context.font = "15px Arial";
        context.fillStyle = 'black';        
        context.fillText(textToDraw, 5, 435);
    }
    
    /**
     * @param  {} context - pointer to canvas
     */
    clearItemCanvas(context) {

        // clear the area used by mob text on canvas using clearRect()        
        context.clearRect(0, 420, 600, 500);
        context.beginPath();
    
    };

}