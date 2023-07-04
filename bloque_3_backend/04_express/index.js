const { exec, spawn } = require("node:child_process");
const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/test", (req, res, err) => {
  return res.send({
    Title: "Response status",
    StatusCode: 200,
    Response: [
      [
        {
          Title: "Hola",
        },
      ],
    ],
  });
});

app.post("/example", (req, res, err) => {
  console.log(req.body)
  
  exec(`./monkey.sh ${req.body}`, (err, stdout, stderr) => {
    if (err) {
      return res.send({
        StatusCode: 500,
      });
    }
    console.log(stdout);
  });

  return res.send({
    StatusCode: 200,
  });
});

app.put("/example", (req, res, err) => {
  console.log(req.body)
  
  exec(`./monkey_update.sh ${req.body}`, (err, stdout, stderr) => {
    if (err) {
      return res.send({
        StatusCode: 500,
      });
    }
    console.log(stdout);
  });

  return res.send({
    StatusCode: 200,
  });
});

app.delete("/example", (req, res, err) => {
  exec(`./monkey_delete.sh`, (err, stdout, stderr) => {
    if (err) {
      return res.send({
        StatusCode: 500,
      });
    }
    console.log(stdout);
  });

  return res.send({
    StatusCode: 200,
  });
})

//app.use('/static', express.static(path.join(__dirname, 'public')))

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(
    `[SERVER]: App running on port on http://localhost:${app.get("port")}/`
  );
});
