import fontColorHandler from "./handler.js"

const getter = document.querySelector("#getter");
const output = document.querySelector("#output");

getter.addEventListener("keyup", fontColorHandler, false);

