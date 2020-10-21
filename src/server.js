// dependence import 
const express = require("express");
const path = require("path");
const pages = require("./pages.js")

//turn on the express
const server = express();

server
    //use the req's body
    .use(express.urlencoded({ extended: true }))
    //using the fixed files
    .use(express.static('public'))

    //config template engine
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "hbs")

    //create routes
    .get("/", pages.index)
    .get("/orphanage", pages.orphanage)
    .get("/orphanages", pages.orphanages)
    .get("/create-orphanage", pages.createOrphanage)
    .post("/save-orphanage", pages.saveOrphanages)

    //turn on the server
    .listen(5500)