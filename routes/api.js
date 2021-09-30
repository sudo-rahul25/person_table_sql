const route = require("express").Router();
const db = require("../db");

route.get("/persons", function (req, res) {
    db.get()
        .then(function (persons) {
            res.send(persons);
        })
        .catch(function (err) {
            res.status(404).send({ error: err });
        });
});

route.post("/persons/add", function (req, res) {
    db.put(req.body.name, req.body.age, req.body.city)
        .then(function () {
            res.redirect("/api/persons");
        })
        .catch(function (err) {
            res.status(404).send({ error: err });
        });
});

route.post("/persons/del", function (req, res) {
    db.del(req.body.name)
        .then(function () {
            res.redirect("/api/persons");
        })
        .catch(function (err) {
            res.status(404).send({ error: err });
        });
});

module.exports = { route };
