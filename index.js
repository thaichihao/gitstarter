var express = require('express')
var app = express()

app.listen(3000, function (err) {
    if (err) console.log(err)
    console.log("Server is running at port 3000...")
})