module.exports = class VehiclesModel {
  constructor({
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    vehicle_class,
    pilots,
    films,
    created,
    edited,
    url,
  }) {
    this.nombre = name;
    this.modelo = model;
    this.manufactura = manufacturer;
    this.costoCreditos = cost_in_credits;
    this.longitud = length;
    this.atmosferaMaxima = max_atmosphering_speed;
    this.tripulacion = crew;
    this.pasajeros = passengers;
    this.capacidadCargo = cargo_capacity;
    this.consumibles = consumables;
    this.claseVehiculo = vehicle_class;
    this.pilotos = pilots;
    this.peliculas = films;
    this.fechaCreacion = created;
    this.fechaEditado = edited;
    this.url = url;
  }
};
