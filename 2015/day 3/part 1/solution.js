const fsPromise = require("fs/promises");
const path = require("path");

async function solution() {
    const textInput = await fsPromise.readFile(
        path.join(__dirname, "../input.txt"),
        "utf-8"
    );
    const visitedHouses = new Set(["0,0"]);
    let x = 0;
    let y = 0;

    for (let c of textInput) {
        if (c == "<") x--;
        if (c == "^") y--;
        if (c == ">") x++;
        if (c == "v") y++;

        visitedHouses.add(`${x},${y}`);
    }

    return visitedHouses.size;
}

solution().then(console.log);
