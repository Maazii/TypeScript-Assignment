var textWithWhiteSpaces = "\t Maaz \n ur Rehman \t Shah";
console.log(textWithWhiteSpaces);
var textWithoutWhiteSpaces = textWithWhiteSpaces.replace(/\s/g, "");
console.log(textWithoutWhiteSpaces);
