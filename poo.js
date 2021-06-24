class Pokemon {

    #name = "";
    #type = "";
    #evolutions = [];

    constructor(name, type, evolutions) {
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }

    set name(value) {
        this.#name = value;
    }

    set type(value) {
        this.#type = value;
    }

    set evolution(value) {
        this.#evolutions = value;
    }

    get name() {
        return this.#name; 
    }

    get type() {
        return this.#type;
    }

    get evolutions() {
        return this.#evolutions; 
    }



    attack() {
        return `${this.#name}, esta atacando`;
    }

    evolve( evolution = 0,) {
        const EVOLVE = this.#evolutions[evolution] || "";
        let message = "No puedo evolucionar";
     
        if(EVOLVE) {

            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name =EVOLVE; 
        }

        return message;
    }
}

const charmander = new Pokemon("Charmander", "Fuego", ["Charmaleon", "Charizad"]);
const Squirtle = new Pokemon("Squirtle", "Agua", ["Wartortle", "Blastoise"]);

console.log(charmander.name);
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(charmander.attack());
console.log(charmander.evolve(1));
charmander.name = "Pikachu";
console.log(charmander.name);



