const person = {
  name: "Nazly",
  lastname: "Zambrano",
  age: 29,
  address: {
    city: "Rionegro",
    village: "La Laja",
    property: "Finca 145",
  },
};
console.table(person);

// Para clonar los datos de 'person' uso los 3 ptos suspensivos:
const person2 = { ...person };
person2.name = "Sven";

console.log(person);
console.log(person2);
