const Service = require("../../src/services/starwars.service");
const Repository = require("../../src/repositories/starwars.repository");
const sinon = require("sinon");

describe("StarWars success", () => {
  beforeAll(() => {
    sinon.stub(Repository.prototype, "getPeoples").callsFake(() => {
      return {
        data: {},
      };
    });
    sinon.stub(Repository.prototype, "getPeopleById").callsFake(() => {
      return {
        data: {},
      };
    });
    sinon.stub(Repository.prototype, "getFilms").callsFake(() => {
      return {
        data: {},
      };
    });
    sinon.stub(Repository.prototype, "getFilmsById").callsFake(() => {
      return {
        data: {},
      };
    });
    sinon.stub(Repository.prototype, "getStarShips").callsFake(() => {
      return {
        data: {},
      };
    });
    sinon.stub(Repository.prototype, "getStarShipsById").callsFake(() => {
      return {
        data: {},
      };
    });
    sinon.stub(Repository.prototype, "getVehicles").callsFake(() => {
      return {
        data: {},
      };
    });
    sinon.stub(Repository.prototype, "getVehiclesById").callsFake(() => {
      return {
        data: {},
      };
    });
    sinon.stub(Repository.prototype, "getSpecies").callsFake(() => {
      return {
        data: {},
      };
    });
    sinon.stub(Repository.prototype, "getSpeciesById").callsFake(() => {
      return {
        data: {},
      };
    });
    sinon.stub(Repository.prototype, "getPlanets").callsFake(() => {
      return {
        data: {},
      };
    });
    sinon.stub(Repository.prototype, "getPlanetsById").callsFake(() => {
      return {
        data: {},
      };
    });
  });

  it('should define "service" class', () => {
    expect(Service).toBeDefined();
  });

  it("method getPlanets should return error", async () => {
    try {
      const service = new Service();
      const response = await service.getPlanets();
      expect(response).toBeObject();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getPlanetsById should return error", async () => {
    try {
      const service = new Service();
      const response = await service.getPlanetsById("1");
      expect(response).toBeObject();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getSpecies should return error", async () => {
    try {
      const service = new Service();
      const response = await service.getSpecies();
      expect(response).toBeObject();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getSpeciesById should return error", async () => {
    try {
      const service = new Service();
      const response = await service.getSpeciesById("1");
      expect(response).toBeObject();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getVehicles should return error", async () => {
    try {
      const service = new Service();
      const response = await service.getVehicles();
      expect(response).toBeObject();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getVehiclesById should return error", async () => {
    try {
      const service = new Service();
      const response = await service.getVehiclesById("1");
      expect(response).toBeObject();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getStarShips should return error", async () => {
    try {
      const service = new Service();
      const response = await service.getStarShips();
      expect(response).toBeObject();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getStarShipsById should return error", async () => {
    try {
      const service = new Service();
      const response = await service.getStarShipsById("1");
      expect(response).toBeObject();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getPeoples should return error", async () => {
    try {
      const service = new Service();
      const response = await service.getPeoples();
      expect(response).toBeObject();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getPeopleById should return error", async () => {
    try {
      const service = new Service();
      const response = await service.getPeopleById("1");
      expect(response).toBeObject();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getFilms should return error", async () => {
    try {
      const service = new Service();
      const response = await service.getFilms();
      expect(response).toBeObject();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getFilmsById should return error", async () => {
    try {
      const service = new Service();
      const response = await service.getFilmsById("1");
      expect(response).toBeObject();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  afterAll(() => {
    sinon.restore();
  });
});

describe("StarWars generate error", () => {
  beforeAll(() => {
    sinon.stub(Repository.prototype, "getPeoples").throws(new Error(""));
    sinon.stub(Repository.prototype, "getPeopleById").throws(new Error(""));
    sinon.stub(Repository.prototype, "getFilms").throws(new Error(""));
    sinon.stub(Repository.prototype, "getFilmsById").throws(new Error(""));
    sinon.stub(Repository.prototype, "getStarShips").throws(new Error(""));
    sinon.stub(Repository.prototype, "getStarShipsById").throws(new Error(""));
    sinon.stub(Repository.prototype, "getVehicles").throws(new Error(""));
    sinon.stub(Repository.prototype, "getVehiclesById").throws(new Error(""));
    sinon.stub(Repository.prototype, "getSpecies").throws(new Error(""));
    sinon.stub(Repository.prototype, "getSpeciesById").throws(new Error(""));
    sinon.stub(Repository.prototype, "getPlanets").throws(new Error(""));
    sinon.stub(Repository.prototype, "getPlanetsById").throws(new Error(""));
  });

  it('should define "service" class', () => {
    expect(Service).toBeDefined();
  });

  it("method getPlanets should return error", async () => {
    try {
      const service = new Service();
      await service.getPlanets();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getPlanetsById should return error", async () => {
    try {
      const service = new Service();
      await service.getPlanetsById("1");
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getSpecies should return error", async () => {
    try {
      const service = new Service();
      await service.getSpecies();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getSpeciesById should return error", async () => {
    try {
      const service = new Service();
      await service.getSpeciesById("1");
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getVehicles should return error", async () => {
    try {
      const service = new Service();
      await service.getVehicles();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getVehiclesById should return error", async () => {
    try {
      const service = new Service();
      await service.getVehiclesById("1");
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getStarShips should return error", async () => {
    try {
      const service = new Service();
      await service.getStarShips();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getStarShipsById should return error", async () => {
    try {
      const service = new Service();
      await service.getStarShipsById("1");
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getPeoples should return error", async () => {
    try {
      const service = new Service();
      await service.getPeoples();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getPeopleById should return error", async () => {
    try {
      const service = new Service();
      await service.getPeopleById("1");
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getFilms should return error", async () => {
    try {
      const service = new Service();
      await service.getFilms();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getFilmsById should return error", async () => {
    try {
      const service = new Service();
      await service.getFilmsById("1");
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  afterAll(() => {
    sinon.restore();
  });
});
