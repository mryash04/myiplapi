const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json());

const players = [
    {
        name : "Rohit",
        age : 32,
        captain : "Mumbai Indians",
        won : 5
    },
    {
        name : "Dhoni",
        age : 39,
        captain : "Chennai Supers Kings",
        won : 3
    },
    {
        name : "Karthik",
        age : 38,
        captain : "Kolkata Knight Riders", 
        won : 2
    },
    {
        name : "KL Rahul",
        age : 31,
        captain : "Punjab Kings",
        won : 0
    }
];

app.get("/", (req, res) => {
    console.log(res.status(200));
    res.status(200).send("This is from home side");
});

app.get("/players", (req, res) => {
    res.status(200).send(players);
})

app.listen(PORT, () => {
    console.log(`This is litening port ${PORT}`)
});