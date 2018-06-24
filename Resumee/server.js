var express=require('express');
var app=express();
var path=require('path');

app.use(express.static(path.join(__dirname,"public")));

app.get("/",function (req,res) {

    res

        .status(200)
        .sendFile(path.join(__dirname,"public","resume.html"));
});

app.listen(3000,function () {
    console.log("server started at port 3000");
});