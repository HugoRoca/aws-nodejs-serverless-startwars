const Service = require("../services/starwars.service");
const services = new Service();

class StarwarsController {
  async getPeoples(req, res) {
    try {
      const response = await services.getPeoples();
      res.json(response)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getPeopleById(req, res) {
    try {
      const { id } = req.params
      const response = await services.getPeopleById(id);
      res.json(response)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getFilms(req, res) {
    try {
      const response = await services.getFilms();
      res.json(response)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getFilmsById(req, res) {
    try {
      const { id } = req.params
      const response = await services.getFilmsById(id);
      res.json(response)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getPlanets(req, res) {
    try {
      const response = await services.getPlanets();
      res.json(response)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getPlanetsById(req, res) {
    try {
      const { id } = req.params
      const response = await services.getPlanetsById(id);
      res.json(response)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getSpecies(req, res) {
    try {
      const response = await services.getSpecies();
      res.json(response)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getSpeciesById(req, res) {
    try {
      const { id } = req.params
      const response = await services.getSpeciesById(id);
      res.json(response)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getStarShips(req, res) {
    try {
      const response = await services.getStarShips();
      res.json(response)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getStarShipsById(req, res) {
    try {
      const { id } = req.params
      const response = await services.getStarShipsById(id);
      res.json(response)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getVehicles(req, res) {
    try {
      const response= await services.getVehicles();
      res.json(response)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getVehiclesById(req, res) {
    try {
      const { id } = req.params
      const response= await services.getVehiclesById(id);
      res.json(response)
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = StarwarsController;
