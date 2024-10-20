const fs = require("fs");
const path = require("path");
const readline = require("readline");

const disallowed = ["ab", "cd", "pq", "xy"];

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
        if (disallowed.some((s) => line.includes(s))) {
            continue;
        }

        if (!line.match(/(.)\1/)) {
            continue;
        }

        if (!line.match(/([aeiou]).*([aeiou]).*([aeiou])/i)) {
            continue;
        }

        niceCount++;
    }

    return niceCount;
}

solution().then(console.log);
