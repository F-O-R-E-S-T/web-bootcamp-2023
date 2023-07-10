const { config } = require('../config');
const fs = require('fs');

class FileService {
  constructor() {
    this.basePath = `${process.cwd()}/${config.dataPath}`;
  }

  async readDirectory() {
    try {
      const files = await fs.readdirSync(this.basePath);
      return files;
    } catch (err) {
      console.error('[ERROR - readDirectory]:', err);
    }
  }

  async readFile(fileName, fileType) {
    try {
      const data = await fs.readFileSync(
        `${this.basePath}/${fileName}.${fileType}`,
        'utf8'
      );
      return data;
    } catch (err) {
      console.error('[ERROR - readFile]:', err);
    }
  }

  async createFile(fileName, fileType, data = '') {
    try {
      await fs.writeFileSync(`${this.basePath}/${fileName}.${fileType}`, data);
    } catch (err) {
      console.error('[ERROR - createFile]:', err);
    }
  }

  deleteRef(fileName, fileType) {
    let deleted = true;
    fs.unlink(`${this.basePath}/${fileName}.${fileType}`, (err) => {
      if (err) {
        console.error('[ERROR - deleteRef]:', err);
        deleted != deleted;
      }
    });

    return deleted;
  }
}

module.exports = FileService;
