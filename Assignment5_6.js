class Car {
    constructor(brand, model, year, color, price, gas) {
        // Properties of the car
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    // Method to sound the car horn and display car details
    honk() {
        console.log('Tuut tuut');
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`);
    }

    // Simulates a race for the car for a given number of turns
    race(turns) {
        for (let i = 1; i <= turns; i++) {
            this.consumeGas(); // Simulate gas consumption
            console.log(`Turn ${i}: ${this.brand} - Gas Remaining: ${this.gas} litres`);
        }
    }

    // Method to simulate gas consumption based on car age
    consumeGas() {
        const newCarGasLoss = 5;
        const olderCarGasLoss = 1;

        // Calculate gas loss based on car age
        const ageDifference = new Date().getFullYear() - this.year;
        const gasLoss = ageDifference > 0 ? newCarGasLoss + (olderCarGasLoss * ageDifference) : newCarGasLoss;

        // Reduce gas based on calculated gas loss
        this.gas -= gasLoss;

        // Gas should not go below 0
        this.gas = Math.max(0, this.gas);
    }
}

// Create car objects
const cars = [
    new Car('Honda', 'CR-V', 2023, 'Red', 50000, 45),
    new Car('Ford', 'F-150', 2020, 'Black', 25000, 30),
    new Car('BMW', 'X5', 2022, 'Green', 60000, 65),
    new Car('Mazda', 'CX-5', 2019, 'White', 15000, 60),
    new Car('Audi', 'Q7', 2018, 'Silver', 52000, 47),
    new Car('Kia', 'Forte', 2020, 'Blue', 21000, 56)
];

// Display car details and simulate race for each car
cars.forEach((car, index) => {
    console.log(`Car ${index + 1} details:`);
    car.honk(); // Honk the horn
    console.log('----------------------------------');
});

// Simulate a race for each car
const raceTurns = 7;
console.log('\nRace Simulation:');
cars.forEach((car, index) => {
    console.log(`Race for Car ${index + 1}:`);
    car.race(raceTurns);
    console.log('----------------------------------');
});
