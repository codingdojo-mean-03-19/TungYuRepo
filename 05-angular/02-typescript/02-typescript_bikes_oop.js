var Bike = /** @class */ (function () {
    function Bike(price, max_speed, miles) {
        if (miles === void 0) { miles = 0; }
        this.price = price;
        this.max_speed = max_speed;
        this.miles = miles;
    }
    Bike.prototype.displayInfo = function () {
        if (this.miles < 0) {
            this.miles = 0;
        }
        console.log("Bike price: " + this.price + ", max speed: " + this.max_speed + ", miles: " + this.miles);
        return this;
    };
    Bike.prototype.ride = function () {
        console.log('Riding');
        this.miles += 10;
        return this;
    };
    Bike.prototype.reverse = function () {
        console.log('Reversing');
        this.miles -= 5;
        return this;
    };
    return Bike;
}());
var bike1 = new Bike(200, "25mph");
bike1.ride().ride().ride().reverse().displayInfo();
var bike2 = new Bike(200, "25mph");
bike2.reverse().reverse().displayInfo();
var bike3 = new Bike(200, "25mph");
bike3.reverse().reverse().reverse().displayInfo();
