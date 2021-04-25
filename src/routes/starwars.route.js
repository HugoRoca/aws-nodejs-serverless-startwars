const { Router } = require("express");
const Controller = require('../controllers/starwars.controller')

const router = Router();
const controller = new Controller()

router.get("/films", controller.getFilms)
router.get("/films/:id", controller.getFilmsById)

router.get("/people", controller.getPeoples)
router.get("/people/:id", controller.getPeopleById)

router.get("/planets", controller.getPlanets)
router.get("/planets/:id", controller.getPlanetsById)

router.get("/species", controller.getSpecies)
router.get("/species/:id", controller.getSpeciesById)

router.get("/starships", controller.getStarShips)
router.get("/starships/:id", controller.getStarShipsById)

router.get("/vehicles", controller.getVehicles)
router.get("/vehicles/:id", controller.getVehiclesById)

module.exports = router