let mmyUsernames: string[] = [];
let ccounter = 0;
if (mmyUsernames.length === 0)
{
    console.log("We need to find some users!");
}
while (ccounter < mmyUsernames.length)
{
    if (mmyUsernames[ccounter] === "admin")
    {
        console.log("Hello admin, would you like to see a status report?");
    }
    else
    {
        console.log(`Hello ${mmyUsernames[ccounter]}!`);
    }
    ccounter++;
}