class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(this.name)
        console.log(this.health)
        console.log(this.speed)
        console.log(this.strength)
    }

    drinkSake(){
        this.health = this.health + 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health){
        super(name, health);
        this.wisdom = 10;
    }

    speakWisdom(){
        console.log("strength through struggle..SON")
    }
}

const nsen = new Sensei("splinter", 20)

nsen.showStats();
nsen.drinkSake();
nsen.speakWisdom();
nsen.showStats();
console.log(nsen.wisdom)
            