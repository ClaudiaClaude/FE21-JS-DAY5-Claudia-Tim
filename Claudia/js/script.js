var car1 = {
    brand: "BMW",
    model: "Z4 (G29)",
    type: "Roadster",
    color: "blue",
    weight: "1405 kg",
    yearProd: "2019",
    img:"img/BMWZ4.jpg",

    // printProp: function() {
    //     return `This car is a ${this.color} ${this.brand} ${this.type}, model ${this.model}, produced in ${this.yearProd}.`;
    // }

    printProp: function() {
        return `<div class="card" style="width: 18rem;"><img src=${this.img} class="card-img-top" id="carImg" alt=""><div class="card-body"><h5 class="card-title">Our cars</h5><p class="card-text" id="cardText">` + `This car is a ${this.color} ${this.brand} ${this.type}, model ${this.model}, produced in ${this.yearProd}.` +`</p><a href="#" class="btn btn-primary">Learn More</a></div></div>`;
    },

}


var car2 = {
    brand: "Mercedes-Benz",
    model: "E53 AMG",
    type: "Grand Tour",
    color: "red",
    weight: "1405 kg",
    yearProd: "2021",
    img:"img/M-BE53AMG.jpg",

    printProp: function() {
        return `<div class="card" style="width: 18rem;"><img src=${this.img} class="card-img-top" id="carImg" alt=""><div class="card-body"><h5 class="card-title">Our cars</h5><p class="card-text" id="cardText">` + `This car is a ${this.color} ${this.brand} ${this.type}, model ${this.model}, produced in ${this.yearProd}.` +`</p><a href="#" class="btn btn-primary">Learn More</a></div></div>`;
    },

}


var car3 = {
    brand: "Mini",
    model: "Cooper S",
    type: "convertible",
    color: "turquoise",
    weight: "1405 kg",
    yearProd: "2020",
    img:"img/MINI.jpg",

    printProp: function() {
        return `<div class="card" style="width: 18rem;"><img src=${this.img} class="card-img-top" id="carImg" alt=""><div class="card-body"><h5 class="card-title">Our Animals</h5><p class="card-text" id="cardText">` + `This car is a ${this.color} ${this.brand} ${this.type}, model ${this.model}, produced in ${this.yearProd}.` +`</p><a href="#" class="btn btn-primary">Learn More</a></div></div>`;
    },

}


document.getElementById("newCard").innerHTML += car1.printProp();
document.getElementById("newCard").innerHTML += car2.printProp();
document.getElementById("newCard").innerHTML += car3.printProp();


var animal1 = {
    type : "fish",
    name : "bubble",
    weight : "25 gr",
    color : "orange",
    img:"img/goldfish.jpg",

    printProp: function () {

        return `<div class="card" style="width: 18rem;"><img src=${this.img} class="card-img-top" id="carImg" alt=""><div class="card-body"><h5 class="card-title">Our Animals</h5><p class="card-text" id="cardText">` + `This animal is a ${this.color} ${this.type}, it weighs ${this.weight}, and is called ${this.name}.` +`</p><a href="#" class="btn btn-primary">Learn More</a></div></div>`;
    }
}

var animal2 = {

    type: "cat",
    name: "Bella",
    weight: "3 kg",
    color: "black",
    img:"img/cat.jpg",

    printProp: function () {

        return `<div class="card" style="width: 18rem;"><img src=${this.img} class="card-img-top" id="carImg" alt=""><div class="card-body"><h5 class="card-title">Our Animals</h5><p class="card-text" id="cardText">` + `This animal is a ${this.color} ${this.type}, it weighs ${this.weight}, and is called ${this.name}.` +`</p><a href="#" class="btn btn-primary">Learn More</a></div></div>`;

    }


}

var animal3 = {

    type: "dobermann",
    name: "Stella",
    weight: "9 kg",
    color: "black",
    img:"img/dog.jpg",

    printProp: function () {

        return `<div class="card" style="width: 18rem;"><img src=${this.img} class="card-img-top" id="carImg" alt=""><div class="card-body"><h5 class="card-title">Our cars</h5><p class="card-text" id="cardText">` + `This animal is a ${this.color} ${this.type}, it weighs ${this.weight}, and is called ${this.name}.` +`</p><a href="#" class="btn btn-primary">Learn More</a></div></div>`;

    }


}

document.getElementById("newAnimal").innerHTML += animal1.printProp();
document.getElementById("newAnimal").innerHTML += animal2.printProp();
document.getElementById("newAnimal").innerHTML += animal3.printProp();