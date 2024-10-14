// Exercice 1 : Manipulation de chaînes de caractères
// Crée une fonction en TypeScript qui prend une chaîne de caractères en paramètre et renvoie la chaîne inversée. Assure-toi de bien typer la fonction et de gérer les cas où la chaîne est vide.

function reverseString(str: string): string {
  if (!str) {
    // return "You must provide a string in order to reverse it.";
    return "";
  }

  //   const reversedString = str.split("").reverse().toString().replaceAll(",", "");
  const reversedString = str.split("").reverse().join("");

  return reversedString;
}

console.log(reverseString("Salut"));
