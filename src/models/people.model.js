class PeopleModel {
  constructor({
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    url,
    created,
    edited,
  }) {
    this.nombre = name;
    this.altura = height;
    this.peso = mass;
    this.colorCabello = hair_color;
    this.colorPiel = skin_color;
    this.colorOjos = eye_color;
    this.anioNacimiento = birth_year;
    this.genero = gender;
    this.lugarNacimiento = homeworld;
    this.peliculas = films;
    this.especie = species;
    this.vehiculos = vehicles;
    this.navesEstelares = starships;
    this.url = url;
    this.fechaCreacion = created;
    this.fechaEditado = edited;
  }
}

module.exports = PeopleModel