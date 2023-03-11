const fs = require("fs")
fs.rename("D:\\Node\\demo.txt", "demo1.txt", renamingComleted)
function renamingComleted(error) {
    if (error) {
        console.log(error)
    } else {
        console.log("file renamed..")
    }
}
