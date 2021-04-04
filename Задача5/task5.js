const fs = require("fs")

let task5File_List = fs.readFileSync("./Задача5/Task5-txlist.txt", "utf-8").toString()
let task5File_Adr = fs.readFileSync("./Задача5/Task5-adr.txt", "utf-8").toString()

let files = task5File_List.split("\n").filter(Boolean).map(JSON.parse)

let balance1 = 0
let balance2 = 0

files.forEach(el => {
    if(el.from == task5File_Adr) {
        if((el.type == "send") || (el.type == "cash")) {
            if(new Date(el.time* 1000).getMonth() < 6) {
                balance1 -= el.value
            } else {
                balance2 -= el.value
            }
        }
    }
})

sum = Math.round(Math.abs(balance1 / balance2) * 100) / 100

console.log(sum)