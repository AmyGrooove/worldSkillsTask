const cryptoJS = require("crypto-js")
const fs = require("fs")

let task1File = fs.readFileSync("./Задача1/Task1-tx.txt", "utf-8").split(" ").join("").split("\r\n").join("").toString()

task1File = cryptoJS.MD5(task1File).toString()

console.log(task1File)