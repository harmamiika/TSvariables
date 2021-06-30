class Vehicle {
    constructor(public color: string) {}
    // color: string;
    // constructor(color: string) {
    //     this.color = color;
    // }

    public drive(): void {
        console.log('wroom');
    }
}
// public - protected - private

class Car extends Vehicle {
    constructor(public wheels: number, public color: string) {
        super(color);
    }
// super on referenssi parentin constructoriin
    public drive(): void {
        console.log('dabaab');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car(4, 'blue');

// interfaces + classes = code reuse in ts