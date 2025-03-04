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

// ==========================  Exercise 3. I Want THAT One!  =============================

app.get("/collectibles/:index", (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
      const i = parseInt(req.params.index);
      if(!isNaN(i) && i >= 0 && i < collectibles.length){
      res.send(`So, you want the ${collectibles[i].name}? For ${collectibles[i].price}, it can be yours!`);
      } else {
        return res.status(400).send("This item is not yet in stock. Check back soon!");
      }
});

