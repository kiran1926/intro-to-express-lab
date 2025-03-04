const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("listening on port 3000");
});

//  ========================= Exercise 1: Be Polite, Greet the User  ======================

app.get("/greetings/:name", (req, res) => {
    res.send(`Hello there, ${req.params.name}!`);
});

// ==========================  Exercise 2 : Rolling the Dice  =============================
app.get("/roll/:number", (req, res) => {
    const num = parseInt(req.params.number);
    if(isNaN(num)) {
        return res.status(400).send("You must specify a number.");
    }
    res.send(`you rolled a ${req.params.number}`);
});

