import fs, { fstatSync } from "fs";
class Superheroe {
  constructor(
    id,
    nombreSuperheroe,
    nombreReal,
    nombreSociedad,
    edad,
    planetaOrigen,
    debilidad,
    poder,
    habilidadEspecial,
    aliado,
    enemigo
  ) {
    this.id = id;
    this.nombreSuperheroe = nombreSuperheroe;
    this.nombreReal = nombreReal;
    this.nombreSociedad = nombreSociedad;
    this.edad = edad;
    this.planetaOrigen = planetaOrigen;
    this.debilidad = debilidad;
    this.poder = poder;
    this.habilidadEspecial = habilidadEspecial;
    this.aliado = aliado;
    this.enemigo = enemigo;
  }
}
export function leerSuperheroes(rutaArchivo) {

  const datos = fs.readFileSync(rutaArchivo, 'utf-8')
  const superheroeArray = JSON.parse(datos);
  const superheroes = superheroeArray.map(hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo))
  superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));
  return superheroes;

}

export function agregarSuperheroes(rutaOriginal, rutaNuevos) {

  const datosOriginales = fs.readFileSync(rutaOriginal, 'utf-8');
  const datosNuevos = fs.readFileSync(rutaNuevos, 'utf-8');
  const superHeroesOriginales = JSON.parse(datosOriginales);
  const nuevosSuperheroes = JSON.parse(datosNuevos);
  const instanciasNuevos = nuevosSuperheroes.map(hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo));


  const listaActualizada = [...superHeroesOriginales, ...instanciasNuevos];
  fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');
  console.log('Lista de superheroes actualizada con exito.');
}
