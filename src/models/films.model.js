module.exports = class FilmsModel {
  constructor({
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
    characters,
    planets,
    starships,
    vehicles,
    species,
    url,
    created,
    edited,
  }) {
    this.titulo = title;
    this.idEpisodio = episode_id;
    this.inicioPelicula = opening_crawl;
    this.director = director;
    this.productor = producer;
    this.fechaLanzamiento = release_date;
    this.personajes = characters;
    this.planetas = planets;
    this.estrellasEstelares = starships;
    this.vehiculos = vehicles;
    this.especies = species;
    this.url = url;
    this.fechaCreacion = created;
    this.fechaEditado = edited;
  }
};
