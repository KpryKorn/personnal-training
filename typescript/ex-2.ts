// Exercice 2 : Manipulation d'objets
// Crée une fonction qui prend un objet contenant des propriétés name, age, et job, puis renvoie une nouvelle version de cet objet où tous les noms sont en majuscules

function upperCaseObject(person: { name: string; age: number; job: string }): {
  name: string;
  age: number;
  job: string;
} {
  person.name = person.name.toUpperCase();

  return person;
}

console.log(upperCaseObject({ name: "Sacha", age: 22, job: "developper" }));
