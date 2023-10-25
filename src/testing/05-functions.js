// Fnes es JS
const greeting = function (name) {
  return `Hola, ${name}`;
};

// Arrow function
const greeting1 = (name) => {
  return `Hola, ${name}`;
};

const greeting2 = (name) => `Hola, ${name}`;

const greeting3 = () => `Hi! World`;

const getUser = () => ({
  uid: "15f4a",
  username: "nazmi.016",
});

console.log(
  greeting("Nazly"),
  greeting1("Milena"),
  greeting2("Sven"),
  greeting3(),
  getUser()
);

// tarea
//1. Transformar a fnc flecha.
// 2. Tiene que retornar un objeto implícito.
// 3.Pruebas
function getUserActive(name) {
  return {
    uid: "afdf454",
    username: name,
  };
}

const userActive = getUserActive("Nazly");
console.log(userActive);

const getUserActive1 = (name) => ({
  uid: "afdf454",
  username: name,
});

console.log(getUserActive1("nazly"));
