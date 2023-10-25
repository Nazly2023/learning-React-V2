import { getPrincessById } from "./bases/08-filter-find";
import { princess } from "./data/princess";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const princess = getPrincessById(2);
//     // resolve(princess);
//     reject("No se pudo encontrar a esa princesa");
//   }, 1000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.warn(err));

const getPrincessByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getPrincessById(id);
      if (p1) {
        resolve(p1);
      }
      reject("No se pudo encontrar a esa princesa");
    }, 1000);
  });
};

// getPrincessByIdAsync(11)
//   .then((princess) => console.log("princess", princess))
//   .catch((err) => console.warn(err));

getPrincessByIdAsync(3).then(console.log).catch(console.warn);
