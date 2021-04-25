const Service = require("../services/starwars.service");
const PeopleModel = require("../models/people.model");
const FilmsModel = require("../models/films.model");
const PlanetsModel = require("../models/planets.model");
const SpeciesModel = require("../models/species.model");
const StarShipsModel = require("../models/starships.model");
const VehiclesModel = require("../models/vehicles.model");
const services = new Service();

class StarwarsController {
  async getPeoples(req, res) {
    try {
      const dataService = await services.getPeoples();
      let data = []
      
      for (let i = 0; i < dataService.results.length; i++) {
        const item = dataService.results[i];
        data.push(new PeopleModel(item))
      }

      res.json(data)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getPeopleById(req, res) {
    try {
      const { id } = req.params
      const dataService = await services.getPeopleById(id);
      const data = new PeopleModel(dataService)
      res.json(data)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getFilms(req, res) {
    try {
      const dataService = await services.getFilms();
      let data = []

      for (let i = 0; i < dataService.results.length; i++) {
        const item = dataService.results[i];
        data.push(new FilmsModel(item))
      }

      res.json(data)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getFilmsById(req, res) {
    try {
      const { id } = req.params
      const dataService = await services.getFilmsById(id);
      const data = new FilmsModel(dataService)
      res.json(data)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getPlanets(req, res) {
    try {
      const dataService = await services.getPlanets();
      let data = []

      for (let i = 0; i < dataService.results.length; i++) {
        const item = dataService.results[i];
        data.push(new PlanetsModel(item))
      }

      res.json(data)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getPlanetsById(req, res) {
    try {
      const { id } = req.params
      const dataService = await services.getPlanetsById(id);
      const data = new PlanetsModel(dataService)
      res.json(data)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getSpecies(req, res) {
    try {
      const dataService = await services.getSpecies();
      let data = []

      for (let i = 0; i < dataService.results.length; i++) {
        const item = dataService.results[i];
        data.push(new SpeciesModel(item))
      }

      res.json(data)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getSpeciesById(req, res) {
    try {
      const { id } = req.params
      const dataService = await services.getSpeciesById(id);
      const data = new SpeciesModel(dataService)
      res.json(data)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getStarShips(req, res) {
    try {
      const dataService = await services.getStarShips();
      let data = []

      for (let i = 0; i < dataService.results.length; i++) {
        const item = dataService.results[i];
        data.push(new StarShipsModel(item))
      }

      res.json(data)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getStarShipsById(req, res) {
    try {
      const { id } = req.params
      const dataService = await services.getStarShipsById(id);
      const data = new StarShipsModel(dataService)
      res.json(data)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getVehicles(req, res) {
    try {
      const dataService= await services.getVehicles();
      let data = []

      for (let i = 0; i < dataService.results.length; i++) {
        const item = dataService.results[i];
        data.push(new VehiclesModel(item))
      }

      res.json(data)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getVehiclesById(req, res) {
    try {
      const { id } = req.params
      const dataService= await services.getVehiclesById(id);
      const data = new VehiclesModel(dataService)
      res.json(data)
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = StarwarsController;
