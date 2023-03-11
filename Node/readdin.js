const fs = require("fs")
fs.readdir("D:\\Node", readDirCompleted)
function readDirCompleted(error, file) {
    if (error) {
        console.log(error)
    } else {
        for (let i = 0; i < file.length; i++) {
            console.log(file[i]);
            console.log(file[i].indexOf(".") > -1 ? "file : " : "-", file[i])
        }
    }
}