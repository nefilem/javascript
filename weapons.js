class weaponWoodenSword {
    constructor(owner) {
        this._owner = owner;
    }

    _owner = null;
    _damage = 25;
    
    /**
     * @param  {} mob - pass in the mob class to attack
     */
    attack(mob) {
        return mob.attacked(this._damage, this._owner);
    }
}