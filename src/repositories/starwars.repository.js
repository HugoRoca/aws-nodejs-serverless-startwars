const axios = require("axios");
const url = "https://swapi.py4e.com/api";

class StarWarsRepository {
  async getPeoples() {
    return await axios.get(`${url}/people`);
  }

  async getPeopleById(id) {
    return await axios.get(`${url}/people/${id}`);
  }

  async getFilms() {
    return await axios.get(`${url}/films`)
  }

  async getFilmsById(id) {
    return await axios.get(`${url}/films/${id}`);
  }

  async getStarShips() {
    return await axios.get(`${url}/starships`)
  }

  async getStarShipsById(id) {
    return await axios.get(`${url}/starships/${id}`);
  }

  async getVehicles() {
    return await axios.get(`${url}/vehicles`)
  }

  async getVehiclesById(id) {
    return await axios.get(`${url}/vehicles/${id}`);
  }

  async getSpecies() {
    return await axios.get(`${url}/species`)
  }

  async getSpeciesById(id) {
    return await axios.get(`${url}/species/${id}`);
  }

  async getPlanets() {
    return await axios.get(`${url}/planets`)
  }

  async getPlanetsById(id) {
    return await axios.get(`${url}/planets/${id}`);
  }
}

module.exports = StarWarsRepository;
