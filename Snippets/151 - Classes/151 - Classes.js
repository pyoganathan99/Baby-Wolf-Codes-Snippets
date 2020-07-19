class Animal {
    name;

    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + ' eats');
    }
}

let tom = new Animal('tom');
let jerry = new Animal('jerry');

tom.eat();
// tom eats
jerry.eat();
// jerry eats

class Humans {
    static printPopulation() {
        console.log("It's a lot");
    }
}

Humans.printPopulation();

class Birb extends Animal {
    fly() {
        console.log(this.name + ' flies');
    }
}

let tweety = new Birb('tweety');
tweety.eat();
// tweety eats
tweety.fly();
// tweety flies