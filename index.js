const express = require("express");
const app = express();
const ipl = require("./iplData");
const PORT = 8000;
const router = require("./routers/ipl");

console.log(router);

app.use(express.json());

app.set("view engine", "ejs");

// https://myapi.mryash04.repl.co/ipl

app.use('/', function(req, res, next){
    res.links({
        next: 'http://demo.com?page=2',
        middle: 'http://demo.com?page=4',
        last: 'http://demo.com?page=6'
    });
    next();
});

app.use(router);

app.listen(PORT, () => {
    console.log(`This is litening port ${PORT}`)
});