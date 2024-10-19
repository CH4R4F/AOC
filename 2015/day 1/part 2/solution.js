// I'll use the same code as part 1

const fsPromise = require("fs/promises");
const path = require("path");

async function solution() {
    const textInput = await fsPromise.readFile(
        path.join(__dirname, "../input.txt"),
        "utf-8"
    );
    let count = 0;
    // set a tracker
    let i = 0;

    for (let c of textInput) {
        // increament the tracket on each iteration
        i++;

        if (c == "(") count++;
        else if (c == ")") count--;

        // check if we enter the basement
        if (count < 0) {
            // this will break and return the value
            return i;
        }
    }
}

solution().then(console.log);
