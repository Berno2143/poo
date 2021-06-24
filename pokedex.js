class Pokedex {

    getinfo(name) {
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            const [DATA = null] = data;
            const MESSAGE = DATA || `el pokemon ${name} no existe`;

            console.log(MESSAGE);
        })
    }
}

const POKEDEX = new Pokedex();
POKEDEX.getinfo("charmander")

/* alert("Hola guapo ☺♥") */

/* const POKEDEX = new Pokedex();
POKEDEX.getinfo("pikachu")
 */

// Desestructuracion
/* const lista = ["Dragon Ball", "Code Geas", "Sailor Moon"];
const [, anime2, anime3] = lista;
console.log(anime2 ,anime3);
 */
/*  const Dragon = lista[0, 1];
const Dragon1 = lista[1];
const Dragon2 = lista[2];
const Dragon3 = lista[3];
const Dragon4 = lista[4];

const dragon = lista[0];
const code = lista[1];
const sailor = lista[2]; */

/* console.log(dragon, code); */
/* console.log(data); */
