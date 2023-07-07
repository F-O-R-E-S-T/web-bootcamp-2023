const router = require("express").Router();

const exampleRouter = require("./example.router");

const loadEndpoint = (app) => {
  app.use("api/v1", router);
  router.use("/example", exampleRouter);
};

module.exports = loadEndpoint;