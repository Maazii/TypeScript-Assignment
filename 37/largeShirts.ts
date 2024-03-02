function make_shirt(size: string = "Large", message: string = "I love TypeScript!"): void
{
    console.log(`Making a ${size} shirt with the message \"${message}\" `);
}

function make_medium_shirt(size: string = "Medium", message: string = "I love TypeScript!"): void
{
    console.log(`Making a ${size} shirt with the message \"${message}\" `);
}

function make_anysize_shirt(size: string, message: string = "I love TypeScript!"): void
{
    console.log(`Making a ${size} shirt with the message \"${message}\" `);
}

make_shirt();
make_medium_shirt();
make_anysize_shirt("Extra Large");