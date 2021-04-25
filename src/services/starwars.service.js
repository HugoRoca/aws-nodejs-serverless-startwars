const Repository = require("../repositories/starwars.repository");
const repository = new Repository();

class StarWarsService {
  async getPeoples() {
    const response = await repository.getPeoples()
    return response.data
  }

  async getPeopleById(id) {
    const response = await repository.getPeopleById(id)
    return response.data
  }

  async getFilms() {
    const response = await repository.getFilms()
    return response.data
  }

  async getFilmsById(id) {
    const response = await repository.getFilmsById(id)
    return response.data
  }

  async getStarShips() {
    const response = await repository.getStarShips()
    return response.data
  }

  async getStarShipsById(id) {
    const response = await repository.getStarShipsById(id)
    return response.data
  }

  async getVehicles() {
    const response = await repository.getVehicles()
    return response.data
  }

  async getVehiclesById(id) {
    const response = await repository.getVehiclesById(id)
    return response.data
  }

  async getSpecies() {
    const response = await repository.getSpecies()
    return response.data
  }

  async getSpeciesById(id) {
    const response = await repository.getSpeciesById(id)
    return response.data
  }

  async getPlanets() {
    const response = await repository.getPlanets()
    return response.data
  }

  async getPlanetsById(id) {
    const response = await repository.getPlanetsById(id)
    return response.data
  }
}

module.exports = StarWarsService;
