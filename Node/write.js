const fs = require("fs")

fs.writeFile("File System\\demo.txt", "writing the data asynchronously", (err) => {
    if (err) throw err
    else {
        console.log("writing asynchronously")
    }
})
fs.readFile("File System\\demo.txt", (err, data) => {
    if (err) throw err
    else console.log(data.toString())
})