const fs = require("fs")
fs.copyFile("D:\\Node\\demo1.txt", "demo.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        fs.rename("demo.txt", "demo1_copy.txt", renameingCompleted)
        function renameingCompleted(error) {
            if (error) {
                console.log(error)
            } else {
                console.log("File Remed....")
                fs.writeFile("demo.txt", "hello hello", (err) => {
                    if (err) throw err
                    else {
                        console.log("Hello.....!")

                    }
                })
            }
        }
    }
})