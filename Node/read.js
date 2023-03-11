const fs = require("fs")
fs.readFile("File System\\demo.txt", (err, data) => {
    if (err) throw err
    else console.log(data.toString())
})