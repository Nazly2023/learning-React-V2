const person = {
  name: "Nazly",
  age: 29,
  key: "nazly16",
};

const { name, age, key } = person;

// retorna el objeto con sus valores
console.log(name, age, key);

const returnPerson = (user) => {
  console.log(user);
};

// retorna el objeto con sus claves y valores correspondientes
returnPerson(person);

const returnPerson1 = (user) => {
  const { age, key, name } = user;
  console.log(age, key, name);
};

// retorna lo que está adentro del arrow function en el orden que tiene el clg
returnPerson1(person);

const returnPerson2 = ({ age, key, name, range = "Captain" }) => {
  console.log(age, key, name, range);
};

// retorna lo que está adentro del arrow function en el orden que tiene el clg
returnPerson2(person);

const returnPerson3 = ({ age, key, name, range = "Captain" }) => {
  return {
    nameKey: key,
    age: age,
  };
};

// retorna lo que está adentro del arrow function en el orden que tiene el clg
returnPerson3(person);

const people = returnPerson3(person);
console.log(people);

const useContext = ({ key, name, age, range = "Captain" }) => {
  return {
    nameKey: key,
    age: yearsOld,
  };
};

const { nameKey } = useContext(person);
console.log(nameKey, age);
