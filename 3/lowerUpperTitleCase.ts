let nameToBeManipulated = "Maaz ur Rehman Shah";
let lowercase = nameToBeManipulated.toLowerCase();
let uppercase = nameToBeManipulated.toUpperCase();
let titlecase = nameToBeManipulated.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());

/* Explanation of regex
    / is a delimiter that is start or end of the pattern
    \w looks for word characters
    \S looks for any substring without spaces
    g is a global flag
*/

console.log(`The name ${nameToBeManipulated} in lower case becomes ${lowercase}, in uppercase becomes ${uppercase}, and in title case becomes ${titlecase}.`);