// same code structure as part 1

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
            w * h * l +
            [w, h, l]
                .sort((a, b) => a - b)
                .slice(0, 2)
                .reduce((acc, x) => acc + x * 2, 0);

        totalResult += result;
    }

    return totalResult;
}

solution().then(console.log);
