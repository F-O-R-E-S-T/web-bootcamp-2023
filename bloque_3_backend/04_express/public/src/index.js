const main = document.querySelector('#main');
const title = document.createElement('h1');
const BASE_URL = 'http://localhost:3000/api/v1';

const content = [];
const rawContent = [
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
];

const exampleFn = () => {
  return 'FOREST';
};

title.textContent = `Hola ${exampleFn()}`;

content.push(title);

window.addEventListener("click", (e) => {
  console.log(e);
});


rawContent.forEach((string, index) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = `${index} - ${string}`;
  paragraph.addEventListener('click', (event) => {
    console.log(event);
    paragraph.textContent = 'Alt text';
  });
  content.push(paragraph);
});

const getData = async () => {
  const rawRes = await fetch(`${BASE_URL}/example`);
  const res = await rawRes.json();

  title.textContent += ` tu archivo es ${res[0]}`;

  main.append(...content);
};

getData();

main.before(`${BASE_URL}`)
