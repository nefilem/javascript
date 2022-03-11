class weaponWoodenSword {
    /**
     * Constructor for weapon class
     * 
     * @param  {var} owner - player class, at the moment player is the only class who can own weapons
     */
    constructor(owner) {
        this._owner = owner;
    }

    _owner = null;
    _damage = 25;
    
    /**
     * Called when attacking a mob, player class is the only class that uses weapons at the moment, could extend to allow mob class too as well
     * but currently mob class is more simplistic and simply has damage value to pass to the player class to cause damage.
     * 
     * @param  {var} mob - pass in the mob class to attack
     */
    attack(mob) {
        return mob.attacked(this._damage, this._owner);
    }
}