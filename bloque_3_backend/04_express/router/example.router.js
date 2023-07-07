const { exec } = require("node:child_process");
const router = require("express").Router();

router.get("/test", (req, res, err) => {
  return res.send({
    Title: "Response status",
    StatusCode: 200,
    Response: [
      [
        {
          title: "Hola",
        },
      ],
    ],
  });
});

router.post("/example", (req, res, err) => {
  try {
    exec(`./monkey.sh ${req.body.title}`, (err, stdout, stderr) => {
      if (err) {
        console.error(
          "[error-message]: Ocurrio un error en el proceso de creacion"
        );

        return res.status(500).send({
          error: "El archivo no se creo",
        });
      } else {
        console.log(stdout);
        return res.status(201).send({
          message: "Archivo creado exitosamente",
        });
      }
    });
  } catch (error) {
    console.error("[error-message]: Ocurrio un error en el script de creacion");
    console.error(error);
    return res.status(500).send({
      error: "Algo salio mal",
    });
  }
});

router.put("/example", (req, res, err) => {
  try {
    exec(
      `./monkey_update.sh ${req.body.update.split(" ")[0]} ${
        req.body.update.split(" ")[1]
      }`,
      (err, stdout, stderr) => {
        if (err) {
          console.error(
            "[error-message]: Ocurrio un error en el proceso de actualizacion"
          );

          return res.status(500).send({
            error: "El archivo no se actualizo",
          });
        } else {
          console.log(stdout);
          return res.status(200).send({
            message: "Archivo actualizado exitosamente",
          });
        }
      }
    );
  } catch (error) {
    console.error(
      "[error-message]: Ocurrio un error en el script de actualizacion"
    );
    console.error(error);
    return res.status(500).send({
      error: "Algo salio mal",
    });
  }
});

router.delete("/example", (req, res, err) => {
  try {
    exec(
      `./monkey_delete.sh ${req.body.identificator}`,
      (err, stdout, stderr) => {
        if (err) {
          console.error(
            "[error-message]: Ocurrio un error en el proceso de eliminacion"
          );

          return res.status(500).send({
            error: "El archivo no se elimino",
          });
        } else {
          console.log(stdout);
          return res.status(200).send({
            message: "Archivo eliminado exitosamente",
          });
        }
      }
    );
  } catch (error) {
    console.error(
      "[error-message]: Ocurrio un error en el script de eliminacion"
    );
    console.error(error);
    return res.status(500).send({
      error: "Algo salio mal",
    });
  }
});

module.exports = router