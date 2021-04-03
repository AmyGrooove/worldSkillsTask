const cryptoJS = require("crypto-js")
const fs = require("fs")

let task2File = fs.readFileSync("./Задача2/Task2-block.json", "utf-8")

const taskObj = JSON.parse(task2File)

let nonceNumber = 0

while(true) {
    taskObj.nonce = nonceNumber
    task2File = JSON.stringify(taskObj)

    task2File.split(" ").join("").split("\r\n").join("").toString()

    const hashBlock = cryptoJS.SHA256(task2File).toString()

    if(hashBlock.substr(hashBlock.length - 4) == "0000"){
        taskObj.hash = hashBlock
        break
    }
    nonceNumber++
}

console.log(taskObj)