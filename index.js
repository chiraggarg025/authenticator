const express = require('express');
const app = express();
const port = 8000;
app.get('/',function(req,res){
    return res.end('<h1>HI</h1>');
})

app.listen(port,function(err){
    if(err){
        console.log(`Error in starting the server : ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})