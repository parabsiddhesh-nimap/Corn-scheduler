const express = require("express");
const fs = require("fs");
const cron = require("node-cron");

const PORT = 8000;
const app = express();

app.get("/",(req,res)=>{
    cron.schedule("*/1 * * * * *", function() {  
        let data = `Logged Time : ${new Date().toUTCString()}`;

        fs.appendFile("logs.txt", data, function(err) {    
            if (err) throw err;
            console.log(data);
        });
    });

    setInterval(()=>{
        let data = `Logged Time : ${new Date().toUTCString()}`;
            console.log(data);
    },1000);
});



app.listen(PORT,()=>{
    console.log(`Server Started On ${PORT}`)
});
