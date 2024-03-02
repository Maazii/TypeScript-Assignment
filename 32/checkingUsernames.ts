let current_users = ["user1", "User2", "user3"];
let newUsers = ["user2", "user3"];

for (let i = 0; i < current_users.length; i++)
{
    current_users[i] = current_users[i].toLowerCase();
}

for (let i = 0; i < newUsers.length; i++)
{
    newUsers[i] = newUsers[i].toLowerCase();
}

for (let i = 0; i < current_users.length; i++)
{
    if (newUsers.indexOf(current_users[i]) !== -1)
    {
        console.log("Username taken! Please come up with a new one!");
    }
    else
    {
        console.log(`${current_users[i]} is available!`);
    }
}

// if (favorite_fruits.indexOf('orange') !== -1)
