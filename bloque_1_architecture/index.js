//Node

const { exec, spawn } = require("node:child_process");

let i = 0;
while (i < 6) {
  exec("./cmd.sh", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });

  console.log(i)

  i+=2;
}
