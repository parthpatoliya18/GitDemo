// const http =require("http")
// let server = http.createServer((request, response) => {
// response.write("<h1> Hello 1 </h1>")
// response.end();

// })
// server.listen(7878,() =>{
    // console.log("Server started at port 7878")
// })
// 
// 
const http =require("http")
let server = http.createServer((request,response)=>{
  response.write("<h1> hello </h1> ")
  response.write("<h2> hello </h2> ")
  response.write("<h3> hello </h3> ")
  response.write("<h4> hello </h4> ")
  response.write("<h5> hello </h5> ")
  response.end()
})
server.listen(8080,()=>{
    console.log("Server started port 8080")
})
