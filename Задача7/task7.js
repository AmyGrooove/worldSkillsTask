const fs = require("fs")
const NodeRSA = require("node-rsa")

let task6File = fs.readFileSync("./Задача7/Task7-keys/Morris_private_key.txt", "utf-8").toString().split("\r\n")
let block = fs.readFileSync("./Задача7/Task7-block.json", "utf-8")
block = JSON.parse(block)

const key = new NodeRSA()

key.importKey({
    n: task6File[2],
    e: 65537,
    d: task6File[0],
    p: task6File[3],
    q: task6File[4],
    dmp1: 1,
    dmq1: 1,
    coeff: 1
}, 'components')

let signBlock = key.sign(block).toString("hex")

console.log(signBlock)