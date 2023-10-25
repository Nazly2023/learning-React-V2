import { princess } from "../data/princess";

// const getPrincessById = (id) => {
//   return princess.find((princess) => {
//     if (princess.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

// console.log(getPrincessById(2));

export const getPrincessById = (id) =>
  princess.find((princess) => princess.id === id);
// console.log(getPrincessById(5));

export const getPrincessByName = (name) =>
  princess.find((princess) => princess.name === name);
// console.log(getPrincessByName("Olaf"));

export const getPrincessByMovie = (movie) =>
  princess.filter((princess) => princess.movie === movie);
// console.log(getPrincessByMovie("Frozen"));
