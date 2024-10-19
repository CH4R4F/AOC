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

    let totalResult = 0;

    for await (const line of rl) {
        const [w, h, l] = line.split("x");
        const result =
            2 * w * h + 2 * w * l + 2 * h * l + Math.min(w * h, w * l, h * l);

        totalResult += result;
    }

    return totalResult;
}

solution().then(console.log);
