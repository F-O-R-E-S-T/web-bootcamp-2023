require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  dataPath: process.env.DATA_PATH || "current_status/"
};

module.exports = {
  config,
};
