const app = document.querySelectorAll("#app p");

function handleClasses(condition, container, cssClass) {
  container.forEach((item) => {
    if (item.classList.contains(cssClass) && condition) {
      item.classList.remove(cssClass);
    } else {
      item.classList.add(cssClass);
    }
  });
}

window.addEventListener("resize", () => {
  handleClasses(false, app, "bigFont");

  app[0].textContent = `Ancho: ${globalThis.screen.width}`;
  app[1].textContent = `Alto: ${globalThis.screen.height}`;

  handleClasses(globalThis.screen.width <= 576, app, "center");
  handleClasses(globalThis.screen.width > 576, app, "center");
});

const plus = document.querySelector("#plus");
const less = document.querySelector("#less");

//-----------------------------

if (
  localStorage.getItem("counter") === undefined ||
  localStorage.getItem("counter") === NaN ||
  localStorage.getItem("counter") === null
) {
  localStorage.setItem("counter", 0);
}

plus.addEventListener("click", () => {
  counter = parseInt(localStorage.getItem("counter"));
  counter += 1;
  localStorage.setItem("counter", counter);

  app.forEach((item) => (item.style.fontSize = `${counter}px`));
});

less.addEventListener("click", () => {
  counter = parseInt(localStorage.getItem("counter"));
  counter -= 1;
  localStorage.setItem("counter", counter);

  app.forEach((item) => (item.style.fontSize = `${counter}px`));
});
