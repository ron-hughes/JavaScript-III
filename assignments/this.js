/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - global binds the .this keyword to the global context of a the program.
* 2. Implicit Binding - implicit binds the .this keyword to the object on which the function was called
* 3. New Binding - new binds
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Global Binding

function globalBind() {
    console.log(this.name);
}

globalBind();

// Principle 2

// code example for Implicit Binding

let myLife = {
    hobbies: 'music & computers',
    isDad: true,
    isMarried: false,
    whoAmI: function() {
        console.log(`My favorite things are ${this.hobbies}, Married? ${this.isMarried}, Father? ${this.isDad}`)
    }
}

myLife.whoAmI();

// Principle 3

// code example for New Binding

function Basketball(name, height, weight, seasons) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.seasons = seasons;
}

const player = new Basketball('Patrick Ewing', '7 Feet', '300lbs', '13')

console.log(`${player.name} is ${player.height} tall and he weighs ${player.weight}. He played a total of ${player.seasons} seasons in the NBA`)

// Principle 4

// code example for Explicit Binding

function birds() {
    console.log(`Birds go ${this.noise}`)

}


let myBirds = {
    name: 'Pigeon',
    noise: 'Chirp'
};

birds.call(myBirds);