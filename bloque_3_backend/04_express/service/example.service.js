const FileService = require('./file.service');

class ExampleService extends FileService {
  constructor() {
    super();
  }

  async getDirInfo() {
    const rawInfo = await this.readDirectory();
    let dirInfo = {};

    rawInfo.forEach((file, index) => {
      dirInfo[index] = file;
    });

    return dirInfo;
  }

  async generateFile(fileName, fileType) {
    await this.createFile(fileName, fileType);
  }

  /**
   Cambia todo el contenido de un archivo
  */
  async writeContent(fileName, fileType, rawData) {
    const existingFile = await this.readDirectory();
    const fileExists = existingFile.includes(`${fileName}.${fileType}`);

    if (fileExists) {
      await this.createFile(fileName, fileType, JSON.stringify(rawData));
    }
    return fileExists;
  }

  /**
   Cambia una parte del contenido de un archivo
  */
  async updateContent(fileName, fileType, rawData) {
    const existingFile = await this.readDirectory();
    const fileExists = existingFile.includes(`${fileName}.${fileType}`);

    if (fileExists) {
      const previousData = JSON.parse(await this.readFile(fileName, fileType));
      const newKeys = Object.keys(rawData);

      newKeys.forEach((key) => {
        previousData[key] = rawData[key];
      });

      await this.createFile(fileName, fileType, JSON.stringify(previousData));
    }
    return fileExists;
  }

  deleteFile(fileName, fileType) {
    const isDeleted = this.deleteRef(fileName, fileType);
    if (isDeleted) {
      return `File ${fileName} deleted`;
    } else {
      return 'Something went wrong';
    }
  }
}

module.exports = new ExampleService();
