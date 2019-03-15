function Ninja(name){
    let speed = 3;
    let strength = 3;
    this.name = name;
    this.health = 100;


// 'Getter' functions help us read private variables
    this.getSpeed = function(){
        return speed
    }

    this.getStrength = function(){
        return strength
    }

   this.kick = function(ninja) {
       const damage = strength * 5;
       ninja.health -= damage;
       console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " health.");
       return this;
    }
    
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

Ninja.prototype.punch = function(ninja) {
    if (ninja instanceof Ninja){
        ninja.health -= 5;
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 health");
    }
    else {
        console.log("Incorrect")
    }
    return this;
};



// var  ninja1 = new Ninja("Goemon");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength


