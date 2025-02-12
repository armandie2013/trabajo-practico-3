import { leerSuperheroes, agregarSuperheroes } from "./utils.mjs";

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

// Agregar nuevos superhéroes al archivo original
agregarSuperheroes(archivoOriginal, archivoNuevos);

// Leer el archivo después de agregar nuevos superhéroes
const superheroes = leerSuperheroes(archivoOriginal);
console.log('Superhéroes ordenados:');
console.log(superheroes);