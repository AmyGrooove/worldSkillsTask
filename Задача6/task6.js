const fs = require("fs")
const cryptoJS = require("crypto-js")

let task6File = fs.readFileSync("./Задача6/Тask6-Транзакции.txt", "utf-8").toString()
let files = task6File.split("\r\n")

let buf = []
let check = 1

files.forEach((el, i) => {
    files[i] = cryptoJS.SHA256(files[i]).toString()
})

while (files.length != 1) {
    if (files.length % 2 == 1) {
        files[files.length] = files[files.length - 1]
    }

    for (let i = 0; i < files.length; i += 2) {
        buf.push(cryptoJS.SHA256(files[i] + files[i + 1]).toString())
    }

    files = buf
    buf = []
    check++
}

files = files[0]

console.log(files, check)