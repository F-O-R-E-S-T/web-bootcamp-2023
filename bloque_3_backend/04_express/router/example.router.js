const router = require('express').Router();
const exampleService = require('../service/example.service');

router.get('/', async (req, res, err) => {
  const dirInfo = await exampleService.getDirInfo();
  res.status(200).json(dirInfo);
});

router.post('/', async (req, res, err) => {
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  await exampleService.generateFile(fileName, fileType);
  res.status(201).json({
    status: 'File created',
  });
});

router.put('/', async (req, res, err) => {
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const rawData = req.body.rawData;
  await exampleService.writeContent(fileName, fileType, rawData);
  res.status(202).json({
    status: 'File updated',
  });
});

router.delete('/', (req, res, err) => {
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const fileStatus = exampleService.deleteFile(fileName, fileType);
  res.status(200).json(fileStatus);
});

module.exports = router;
