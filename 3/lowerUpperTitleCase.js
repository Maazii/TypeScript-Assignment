var nameToBeManipulated = "Maaz ur Rehman Shah";
var lowercase = nameToBeManipulated.toLowerCase();
var uppercase = nameToBeManipulated.toUpperCase();
var titlecase = nameToBeManipulated.replace(/\w\S*/g, function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
/* Explanation of regex
    / is a delimiter that is start or end of the pattern
    \w looks for word characters
    \S looks for any substring without spaces
    g is a global flag
*/
console.log("The name ".concat(nameToBeManipulated, " in lower case becomes ").concat(lowercase, ", in uppercase becomes ").concat(uppercase, ", and in title case becomes ").concat(titlecase, "."));
