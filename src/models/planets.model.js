module.exports = class PlanetsModel {
  constructor({
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
    residents,
    films,
    created,
    edited,
    url,
  }) {
    this.titulo = name;
    this.periodoRotacion = rotation_period;
    this.periodoOrbital = orbital_period;
    this.diametro = diameter;
    this.clima = climate;
    this.gravedad = gravity;
    this.terreno = terrain;
    this.superficieAgua = surface_water;
    this.poblacion = population;
    this.residentes = residents;
    this.peliculas = films;
    this.fechaCreacion = created;
    this.fechaEditado = edited;
    this.url = url;
  }
};
