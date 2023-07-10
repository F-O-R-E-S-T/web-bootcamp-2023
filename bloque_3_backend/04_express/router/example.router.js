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
  const fileStatus = await exampleService.writeContent(
    fileName,
    fileType,
    rawData
  );
  if (fileStatus) {
    res.status(202).json({
      status: 'File updated',
    });
  } else {
    res.status(404).json({
      status: 'File not found',
    });
  }
});

router.patch('/', async (req, res, err) => {
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const rawData = req.body.rawData;
  const fileStatus = await exampleService.updateContent(
    fileName,
    fileType,
    rawData
  );
  if (fileStatus) {
    res.status(202).json({
      status: 'File updated',
    });
  } else {
    res.status(404).json({
      status: 'File not found',
    });
  }
});

router.delete('/', (req, res, err) => {
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const fileStatus = exampleService.deleteFile(fileName, fileType);
  res.status(200).json(fileStatus);
});

module.exports = router;
