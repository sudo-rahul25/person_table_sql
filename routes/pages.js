const route = require("express").Router();
const db = require("../db");

route.get("/", function (req, res) {
    db.get()
        .then(function (persons) {
            res.render("index", { persons });
        })
        .catch(function (err) {
            res.status(404);
        });
});

route.get("/add", function (req, res) {
    res.render("add");
});

route.get("/del", function (req, res) {
    res.render("rem");
});

route.post("/add", function (req, res) {
    db.put(req.body.name, req.body.age, req.body.city)
        .then(function () {
            res.redirect("/pages");
        })
        .catch(function () {
            res.status(404);
        });
});

route.post("/del", function (req, res) {
    db.del(req.body.name)
        .then(function () {
            res.redirect("/pages");
        })
        .catch(function () {
            res.status(404);
        });
});

module.exports = { route };
