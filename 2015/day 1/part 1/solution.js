const fsPromise = require("fs/promises");
const path = require("path");

async function solution() {
    const textInput = await fsPromise.readFile(
        path.join(__dirname, "../input.txt"),
        "utf-8"
    );
    let count = 0;

    for (let c of textInput) {
        if (c == "(") count++;
        else if (c == ")") count--;
    }

    return count;
}

solution().then(console.log);
