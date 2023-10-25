// import { useState } from "react";

const characters = ["Vanellope", "Princesa Mérida", "Rapunzel"];

// Llamar a los personajes uno por uno
console.log(characters[0]);
console.log(characters[1]);
console.log(characters[2]);

const [, p2] = characters;
console.log(p2);

const returnArray = () => {
  return ["ABC", 123];
};

const [, letter] = returnArray();
console.log(letter);

// Tarea:
// 1. El primer valor del arr se llamará 'name'
// 2. Se llamará setName
const usState = (value) => {
  return [
    (value,
    () => {
      console.log("Hi! World");
    }),
  ];
};

const [name, setName] = usState("Vanellope");
console.log(name);
setName();
