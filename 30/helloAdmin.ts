let myUsernames=["user1", "user2", "user3", "user4", "user5", "user6", "admin"];
let counter = 0;
while (counter < myUsernames.length)
{
    if (myUsernames[counter] === "admin")
    {
        console.log("Hello admin, would you like to see a status report?");
    }
    else
    {
        console.log(`Hello ${myUsernames[counter]}!`);
    }
    counter++;
}