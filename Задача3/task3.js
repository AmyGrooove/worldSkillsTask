const fs = require("fs")
const { sha3_256 } = require("js-sha3")

let task3File = fs.readFileSync("./Задача3/Task3-hash.txt", "utf-8").toString()

let a = 1
let answerObj = {}
let check = ""

while(true) {

    let timeStamp = ((new Date(2020, 0, a, 3).getTime()) / 1000).toString()

    switch(task3File.length) {
        case 56: check = sha3_224(timeStamp).toString()
        break
        case 64: check = sha3_256(timeStamp).toString()
        break
        case 96: check = sha3_384(timeStamp).toString()
        break
        case 128: check = sha3_512(timeStamp).toString()
        break
    }

    if(check == task3File) {
        answerObj.day = (new Date(2020, 0, a, 3)).getDate()
        answerObj.month = (new Date(2020, 0, a, 3)).getMonth() + 1
        answerObj.unixTime = (new Date(2020, 0, a, 3)).getTime() / 1000

        break
    }
    a++
}

console.log(answerObj)