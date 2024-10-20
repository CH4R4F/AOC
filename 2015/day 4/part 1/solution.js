const fsPromise = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

async function solution() {
    const textInput = await fsPromise.readFile(
        path.join(__dirname, "../input.txt"),
        "utf-8"
    );

    let i = 100_000;

    // a brut-force isn't it :(
    while (i < 999_999) {
        let secret = textInput.concat(i);
        let md5 = crypto.createHash("md5").update(secret).digest("hex");

        if (md5.startsWith("00000")) {
            return i;
        }

        i++;
    }
}

solution().then(console.log);
