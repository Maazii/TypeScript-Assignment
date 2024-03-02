function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript!"; }
    console.log("Making a ".concat(size, " shirt with the message \"").concat(message, "\" "));
}
function make_medium_shirt(size, message) {
    if (size === void 0) { size = "Medium"; }
    if (message === void 0) { message = "I love TypeScript!"; }
    console.log("Making a ".concat(size, " shirt with the message \"").concat(message, "\" "));
}
function make_anysize_shirt(size, message) {
    if (message === void 0) { message = "I love TypeScript!"; }
    console.log("Making a ".concat(size, " shirt with the message \"").concat(message, "\" "));
}
make_shirt();
make_medium_shirt();
make_anysize_shirt("Extra Large");
