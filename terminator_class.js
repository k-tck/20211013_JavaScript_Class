// JS_CLASS exercise

// create a class Terminator, 
// which have a model and a hp field, 
// kill() method, heal() method and self-destroy() method. 
// Just run console.log() with some text inside kill() and self-destroy(). 
// Increase the hp of the terminator by 50 when heal() is used.


class Terminator {
    constructor(model, hp_level){
        this.model = model
        this.hp_level = hp_level
    }
    //Kill method
    kill() {
        console.log(`I am going to kill you, ${this.model}.`)
    }

    //Heal method
    heal() {
        let x = this.hp_level + 50
        console.log(`${this.model} Power Up from ${this.hp_level} to ${x}!!`)
    }

    //Self-destroy method
    selfDestroy() {
        console.log(`${this.model}, is in self-destroy mode!`)
    }
}

const T800 = new Terminator('T-800', 500)
const T1000 = new Terminator('T-1000', 700)
const TX = new Terminator('T-X', 900)
// console.log(T800, T1000, TX)

T800.kill()
T1000.heal()
TX.selfDestroy()