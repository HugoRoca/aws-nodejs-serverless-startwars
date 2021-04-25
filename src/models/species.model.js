module.exports = class SpeciesModel {
  constructor({
    name,
    classification,
    designation,
    average_height,
    average_lifespan,
    hair_colors,
    skin_colors,
    eye_colors,
    homeworld,
    language,
    people,
    films,
    url,
    created,
    edited,
  }) {
    this.nombre = name;
    this.clasificacion = classification;
    this.designacion = designation;
    this.promedioAltura = average_height;
    this.esperanzaVida = average_lifespan;
    this.colorCabello = hair_colors;
    this.colorPiel = skin_colors;
    this.colorOjos = eye_colors;
    this.mundoNatal = homeworld;
    this.lenguage = language;
    this.personas = people;
    this.peliculas = films;
    this.url = url;
    this.fechaCreacion = created;
    this.fechaEditado = edited;
  }
};
