function Ninja(name){
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;


// 'Getter' functions help us read private variables
    this.getSpeed = function(){
        return speed
    };

    this.getStrength = function(){
        return strength
    };
};

Ninja.prototype.sayName = function() {
    console.log("Hi, I'm " + this.name);
    return this;
};

Ninja.prototype.showStats = function() {
    console.log("Name: " + this.name + ", Health:" + this.health  + ", Strength: " + this.getStrength() + ", Speed: " + this.getSpeed() )
    return this;
};

Ninja.prototype.drinkSake = function() {
    this.health += 10;
    return this;
};

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();




