var guests = ["Carl Jung", "Abu Hamid Al-Ghazzali", "Muhammad Ali Jinnah", "Sir Syed Ahmed Khan"];
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], "! You are invited over for dinner!"));
}
console.log("I just found a bigger table, so we get more guests!");
guests.push("Allama Muhammad Iqbal");
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], "! You are invited over for dinner!"));
}
