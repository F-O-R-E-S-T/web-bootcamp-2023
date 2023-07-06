require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  key: process.env.KEY || "jhfdjhd34q53eudju7",
  serverIp: process.env.SERVER_IP || "12.23.25.26",
  cdn: process.env.CDN || "http://www.frontend.com",
  downloadFolder: process.env.DOWNLOAD_FOLDER || "/",
};

module.exports = {
  config,
};
