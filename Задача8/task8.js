const fs = require("fs")
const NodeRSA = require("node-rsa")
const cryptoJS = require("crypto-js")
const { sha3_256 } = require("js-sha3")

let task8File = []

let indexCheck = 0
let maxFilesCount = 0

while (true) {
    try {
    task8File[maxFilesCount] = fs.readFileSync(`./Задача8/Task8-Chain/block${maxFilesCount}.txt`, "utf-8")
    task8File[maxFilesCount] = JSON.parse(task8File[maxFilesCount])
    maxFilesCount++
    } catch (e) {
        break
    }
}

let keys = fs.readdirSync("./Задача8/Task8-Keys", "utf-8")

while (indexCheck != maxFilesCount) {
    let bufObj = {}

    if (task8File[indexCheck].index != indexCheck) {
        console.log(indexCheck, "index", indexCheck)
        break
    }

    let nonceNumber = 0
    while (true) {
        if (indexCheck == 0) {
            bufObj = {
                index: task8File[indexCheck].index,
                pre_hash: task8File[indexCheck].pre_hash,
                data: task8File[indexCheck].data,
                nonce: nonceNumber
            }
        } else {
            bufObj = {
                index: task8File[indexCheck].index,
                pre_hash: task8File[indexCheck].pre_hash,
                data: task8File[indexCheck].data,
                creator: task8File[indexCheck].creator,
                nonce: nonceNumber
            }
        }

        let bufObjString = JSON.stringify(bufObj)
        
        const hashBlock = cryptoJS.SHA256(bufObjString).toString()
        if (hashBlock.substr(0, 4) == "0000") {
            bufObj.hash = hashBlock
            break
        }
        nonceNumber++
    }

    if ((indexCheck != 0) && (task8File[indexCheck - 1].hash != task8File[indexCheck].pre_hash)) {
        console.log(indexCheck, "pre_hash", task8File[indexCheck - 1].hash)
        break
    } else if ((indexCheck == 0) && (task8File[indexCheck].pre_hash != 0)) {
        console.log(indexCheck, "pre_hash", 0)
        break
    }

    if (bufObj.hash != task8File[indexCheck].hash) {
        console.log(indexCheck, "hash", bufObj.hash)
        break
    }

    if (bufObj.nonce != task8File[indexCheck].nonce) {
        console.log(indexCheck, "nonce", bufObj.nonce)
        break
    }

    indexCheck++
}