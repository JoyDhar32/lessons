class Car{
    constructor(name,brand,price){
        this.carName= name;
        this.carBrand= brand;
        this.carPrice=price;
    }
    carDetails(){
        return `Car Name: ${this.carName}, Brand: ${this.carBrand}, Price: ${this.carPrice}`;
    }
}

class BMW extends Car{
    constructor(name,brand,price,engine){
        super(name,brand,price);
        this.engine= engine;
    }
    carDetails(){
        return `${super.carDetails()}, Engine: ${this.engine}`;
    }
}

let bmw= new BMW('X5','BMW', 100000, 'V8');
console.log(bmw.carDetails()); // Car Name: X5, Brand: BMW, Price: 100000, Engine: V8

// ⭐ JS Inheritance ⭐