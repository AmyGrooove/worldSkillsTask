const fs = require("fs")
const { sha3_256, sha3_384 } = require("js-sha3")

let task4File = fs.readFileSync("./Task4-hash.txt", "utf-8").toString()

let str1 = sha3_384("WorldSkills2020")
let numb = 0

while(true) {
    str2 = str1 + numb.toString().padStart(6, "0")

    str2 = sha3_256(str2)

    if (str2 == task4File){
        break
    }

    numb++
}

console.log(numb)