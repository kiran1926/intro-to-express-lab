const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("listening on port 3000");
});

//  ========================= Exercise 1: Be Polite, Greet the User  ======================

app.get("/greetings/:name", (req, res) => {
    res.send(`Hello there, ${req.params.name}!`);
});

