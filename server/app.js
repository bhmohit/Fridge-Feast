import express from "express"

var app = express();

app.use(express.json());

app.get("/", (req, res) => {res.send("hello world")})

app.get("/suggestion", (req, res) => {
    const body = req.body;
    const suggestion = getSuggestion(body.ingredients, body.time, body.cuisine);
    res.send({"suggestion": suggestion});
})

app.listen(3000)