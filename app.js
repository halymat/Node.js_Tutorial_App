const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/user", (req, res) => {
    res.json({ name: "Mark", age: 23, sex: "Male" });
});

app.listen(3000, function() {
    console.log(
        "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there"
    );
});