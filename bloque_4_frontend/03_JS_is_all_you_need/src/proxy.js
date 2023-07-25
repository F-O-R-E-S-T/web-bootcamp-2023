const target = document.querySelector("#getter");
const output = document.querySelector("#output");

const LEVENSHTEIN_DISTANCE = 1

const removeKeywords = (keys, text) => {
    Object.keys(keys).forEach(key => {
        text.replaceAll(key, "")
    })
}

const fontActions = {
  "color-red": () => {
    target.style.color = "red";
  },

  "color-black": () => {
    target.style.color = "black";
  },

  "color-pink": () => {
    target.style.color = "pink";
  },

  rebota: () => {
    output.classList = "animate__animated animate__bounce animate__infinite";
    output.textContent = removeKeywords(this, target.value)
  },
  salta: () => {
    output.classList = "animate__animated animate__zoomIn animate__infinite";
    output.textContent = removeKeywords(this, target.value)
  },
  sorpresa: () => {
    output.classList = "animate__animated animate__tada animate__infinite";
    output.textContent = removeKeywords(this, target.value)
  },
  largo: () => {
    output.classList = "animate__animated animate__bounceOutUp";
    output.textContent = removeKeywords(this, target.value)
  },
  sigilo: () => {
    output.classList = "animate__animated animate__flipOutY";
    output.textContent = removeKeywords(this, target.value)
  },
  limpia: () => {
    output.style.background = "white";
    output.textContent = "";
  },
};

const fontHandler = {
  set(obj, prop, value) {
    const stringValue = value.split(" ");
    const keys = Object.keys(obj);

    stringValue.forEach((element) => {
      if (keys.includes(element)) {
        obj[element]();
      }

      let suggestion = keys.find((key) => {
        return Levenshtein.get(key, value) <= LEVENSHTEIN_DISTANCE;
      });

      if (suggestion) {
        obj[suggestion]();
      }
    });

    return true;
  },
};

export const fontProxy = () => {
  return new Proxy(fontActions, fontHandler);
};
