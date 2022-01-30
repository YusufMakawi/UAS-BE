/**
 * TODO 1: SETUP SERVER USING EXPRESS.JS.
 * UBAH SERVER DI BAWAH MENGGUNAKAN EXPRESS.JS.
 * SERVER INI DIBUAT MENGGUNAKAN NODE.JS NATIVE.
 */

//(function(){"use strict";require("http").createServer(function(t,e){e.writeHead(200,{"Content-Type":"text/html"}),e.write("Final Project UAS - Good Luck."),e.end()}).listen(3e3,function(){console.log("[Server] Running at: http://localhost:3000")})}).call(this);


const express = require("express");


const app = express();


app.use(express.json());

 
const router = require("./routes/api");
app.use(router);    


app.listen(8080, () =>{
     console.log("Server running at http://localhost:3000")
});

