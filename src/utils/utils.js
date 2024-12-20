import { words } from "./words";


export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

export function getFarewellText(name) {
  const options = [
    `Farewell, ${name}`,
    `Goodbye, ${name}`,
    `Adios, ${name}`,
    `R.I.P., ${name}`,
    `Bye, ${name}`,
    `We'll miss you, ${name}`,
    `Oh no, not ${name}`,
    `Gone but not forgotten, ${name}`,
    `The end of, ${name}`,
    `Adios, ${name}`,
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
