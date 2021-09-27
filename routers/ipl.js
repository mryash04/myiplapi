const express = require("express");
const router = new express.Router();
const ipl = require("../iplData");

router.get("/", (req, res) => {
    console.log(res.status(200));
    res.status(200).send({
        GET : "https://myapi.mryash04.repl.co/ipl",
        POST : "https://myapi.mryash04.repl.co/ipl",
        PUT : "https://myapi.mryash04.repl.co/ipl/1",
        DELETE : "https://myapi.mryash04.repl.co/ipl/1"
    });
    console.log(res.get('link'));
});

router.get("/index", (req, res) => {
    res.status(200).render("index", {text45 : "This is a message"});
});

router.get("/ipl", (req, res) => {
    res.status(200).send(ipl);
});

router.post("/ipl", (req, res) => {
    const id = req.body.id;
    const data = req.body;
    const user = {
        id : ipl.length + 1,
        name : req.body.name,
        captain : req.body.captain,
        age : req.body.age,
    }
    console.log("This is new data", user);
    res.status(200).send(data);
    ipl.push(data);
});

router.put("/ipl/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const index = ipl.findIndex(value => {
        return value.id == id;
    });
    if(index >= 0){
        const newIplData = ipl[index];
        newIplData.name = req.body.name;
        newIplData.captain = req.body.captain;
        newIplData.age = req.body.age;
        console.log("The new ipl data is", newIplData);
        res.status(200).send(newIplData);
    }else{
        res.status(400).json({message: "This is a error"});
    }
    console.log(index);
    console.log("The update team is", id);
    console.log("The update team data is", data);
});

router.delete("/ipl/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const index = ipl.findIndex(value => {
        return value.id == id;
    });
    if(index >= 0){
        const newIplData = ipl[index];
        ipl.slice(index, 1);
        console.log("This is new ipl data", newIplData);
    }else{
        res.status(400).json({message : "This is a error"});
    }
    console.log(index);
    console.log("The delete item is", id);
    console.log("The delete item data is", data);
    res.status(200).send(data);
});

module.exports = router;