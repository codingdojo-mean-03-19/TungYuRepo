// Part I
class Ninja {
    constructor(name){
        this._name = name;
        this._health = 100;
        this._speed = 3;
        this._strength = 3;
    }
    //prototype method
    sayName(){
        console.log(`My name is ${this._name}`);
    }
    showStats(){
        console.log(`Name: ${this._name}, Strength: ${this._strength}, Speed: ${this._speed}, Health: ${this._health}`)
    }
    drinkSake(){
        this._health += 10;
        return this;
    }
}
const ninja1 = new Ninja("Tina")

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().showStats();



// Part II - Sensei Class
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this._health = 200;
        this._speed = 10;
        this._strength = 10;
        this._wisdom = 10;
    }
    //prototype method
    speakWisdom(){
        super.drinkSake();
        console.log(`What one programmer can do in one month, two programmers can do in two months`)
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();