let textWithWhiteSpaces="\t Maaz \n ur Rehman \t Shah";
console.log(textWithWhiteSpaces);
let textWithoutWhiteSpaces = textWithWhiteSpaces.replace(/\s/g, "");
console.log(textWithoutWhiteSpaces);