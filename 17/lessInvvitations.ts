let guests=["Carl Jung", "Abu Hamid Al-Ghazzali", "Fyodor Dostoevsky", "Muhammad Ali Jinnah", "Sir Syed Ahmed Khan"]
console.log("I just found out that I can only have two people over because the table won't arrive in time for the dinner");
guests.push("Allama Muhammad Iqbal");
for (let i = guests.length-1; i > 1; i--)
{
    console.log(i)
    console.log(`My apologies ${guests[i]}, I won't be able to accomodate you for the dinner this time, maybe next one!`);
    guests.pop();
}
for (let i = 0; i < guests.length; i++)
{
    console.log(`Hi! ${guests[i]}, you are still invited!`);
}
guests.pop()
guests.pop()
console.log(guests)