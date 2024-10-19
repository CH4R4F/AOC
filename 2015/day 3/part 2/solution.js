const fsPromise = require("fs/promises");
const path = require("path");

async function solution() {
    const textInput = await fsPromise.readFile(
        path.join(__dirname, "../input.txt"),
        "utf-8"
    );

    const santaVisitedHouses = new Set(["0,0"]);
    const robotVisitedHouses = new Set(["0,0"]);
    let sx = 0;
    let sy = 0;
    let rx = 0;
    let ry = 0;

    for (let i = 0; i < textInput.length; i++) {
        if (textInput[i] == "<") i % 2 ? sx-- : rx--;
        if (textInput[i] == "^") i % 2 ? sy-- : ry--;
        if (textInput[i] == ">") i % 2 ? sx++ : rx++;
        if (textInput[i] == "v") i % 2 ? sy++ : ry++;

        if (i % 2) {
            santaVisitedHouses.add(`${sx},${sy}`);
        } else {
            robotVisitedHouses.add(`${rx},${ry}`);
        }
    }

    return new Set([
        ...santaVisitedHouses.values(),
        ...robotVisitedHouses.values(),
    ]).size;
}

solution().then(console.log);
