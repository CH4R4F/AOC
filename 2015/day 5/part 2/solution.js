const fs = require("fs");
const path = require("path");
const readline = require("readline");

async function solution() {
    const fileStream = fs.createReadStream(
        path.join(__dirname, "../input.txt")
    );

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    let niceCount = 0;

    for await (const line of rl) {
        if (!line.match(/(..).*\1/)) {
            continue;
        }

        if (!line.match(/(.).\1/)) {
            continue;
        }

        niceCount++;
    }

    return niceCount;
}

solution().then(console.log);
