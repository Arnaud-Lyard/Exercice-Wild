// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
var cors = require('cors')

app.use(cors())
app.use(express.json());

// Server port
var HTTP_PORT = 8000

// Start server
app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`)
});

// Get all names
app.get("/api/names", (req, res) => {
    var sql = "select * from names"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.status(200).json(rows)
      });
});

// Create a name
app.post("/api/names/", (req, res) => {
    var errors="Veuillez spécifier un nom";

    if (!req.body.name){
        res.status(400).json({"error":errors});
        return;
    }
    var data = {
        name: req.body.name,
    }
    var sql ='INSERT INTO names (name) VALUES (?)'
    var params = data.name
    db.run(sql, params, (err, result) => {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.status(201).json(data)
    });
})