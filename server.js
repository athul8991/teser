const http =require('http');
const { hostname } = require('os');
const hostName='0.0.0.0';
const port = 3000;

http.createServer((req,res)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/html');
    res.write("Hello World");
    res.end()
}).listen(port,hostName,()=>{
    console.log ("server running at port : "+port)

})