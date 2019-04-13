class Bike {
	constructor(
		public price: number,
		public max_speed: string,
		public miles: number = 0) {
	}
	displayInfo() {
		if (this.miles < 0) {
			this.miles = 0;
		}	
		console.log(`Bike price: ${this.price}, max speed: ${this.max_speed}, miles: ${this.miles}`);
		return this;
	}
	ride() {
		console.log('Riding');
		this.miles += 10;
		return this;
	}
	reverse() {
		console.log('Reversing')
		this.miles -= 5;
		return this;
	}
}

let bike1 = new Bike(200, "25mph");
bike1.ride().ride().ride().reverse().displayInfo();

let bike2 = new Bike(200, "25mph");
bike2.reverse().reverse().displayInfo();

let bike3 = new Bike(200, "25mph");
bike3.reverse().reverse().reverse().displayInfo();