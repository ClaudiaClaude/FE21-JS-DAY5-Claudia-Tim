// Classes - Basic

class Car {
    brand;
    model;
    type;
    color;
    yearProd;
    img;

    constructor (a, b, c, d, e, f) {
        this.brand = a;
        this.model = b;
        this.type = c;
        this.color = d;
        this.yearProd = e;
        this.img = f;
    }

    printProp() {
        return `<div class="card" style="width: 18rem;"><img src=${this.img} class="card-img-top" id="carImg" alt=""><div class="card-body"><h5 class="card-title">Our cars</h5><p class="card-text" id="cardText">` + `This car is a ${this.color} ${this.brand} ${this.type}, model ${this.model}, produced in ${this.yearProd}.` +`</p><a href="#" class="btn btn-primary">Learn More</a></div></div>`;
    }
}

var car1 = new Car("BMW", "Z4 (G29)", "Roadster", "blue", "2019", "img/BMWZ4.jpg",);
var car2 = new Car("Mercedes-Benz", "E53 AMG", "Grand Tour", "red", "2021", "img/M-BE53AMG.jpg",);
var car3 = new Car("Mini", "Cooper S", "convertible", "turquoise", "2020", "img/MINI.jpg");

document.getElementById("newCard").innerHTML += car3.printProp();
document.getElementById("newCard").innerHTML += car2.printProp();
document.getElementById("newCard").innerHTML += car1.printProp();


class Animal {
    type;
    name;
    weight;
    color;
    img;

    constructor (a, b, c, d, e) {
        this.type = a;
        this.name = b;
        this.weight = c;
        this.color = d;
        this.img = e;
    }

    printProp() {
        return `<div class="card" style="width: 18rem;"><img src=${this.img} class="card-img-top" id="carImg" alt=""><div class="card-body"><h5 class="card-title">Our Animals</h5><p class="card-text" id="cardText">` + `This animal is a ${this.color} ${this.type}, it weighs ${this.weight}, and is called ${this.name}.` +`</p><a href="#" class="btn btn-primary">Learn More</a></div></div>`;
    }
}

var animal1 = new Animal("fish", "Bubble", "25 gr", "orange", "img/goldfish.jpg");
var animal2 = new Animal("cat", "Bella", "3 kg", "black", "img/cat.jpg");
var animal3 = new Animal("dobermann", "Stella", "9 kg", "black", "img/dog.jpg");

document.getElementById("newAnimal").innerHTML += animal3.printProp();
document.getElementById("newAnimal").innerHTML += animal2.printProp();
document.getElementById("newAnimal").innerHTML += animal1.printProp();


class Person {
    name;
    gender;
    profession;
    age;
    languages;

    constructor (a, b, c, d, e) {
        this.name = a;
        this.gender = b;
        this.profession = c;
        this.age = d;
        this.languages = e;
    }

    printProp() {
        return `<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Our staff</h5><p class="card-text" id="cardText">` + `This is  ${this.name}, ${this.gender} is ${this.age} years old and is a ${this.profession}.` +`</p><a href="#" class="btn btn-primary">Learn More</a></div></div>`;
    }
}

var person1 = new Person("Roberta", "she", "web developer", "28", ["english", "spanish", "german"]);
var person2 = new Person("Yumi", "she", "marketing manager", "30", ["german", "english", "japanese"]);
var person3 = new Person("Dani", "zee", "graphic designer", "25", ["german", "english"]);

document.getElementById("newPerson").innerHTML += person3.printProp();
document.getElementById("newPerson").innerHTML += person2.printProp();
document.getElementById("newPerson").innerHTML += person1.printProp();



// Classes - Intermediate

class NewVehicle extends Car {
    numbWheels;

    constructor (a, b, c, d, e, f, g) {
        super(a, b, c, d, e, f);
        this.numbWheels = g;
    }
} 

var motorCycle = new NewVehicle("motorcycle", "IDK", "moto", "red", 2018, "none", 4);

console.table(motorCycle);