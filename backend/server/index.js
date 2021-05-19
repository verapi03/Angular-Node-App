const express = require('express');
const cors = require("cors");
const {Technology} = require("../models");

const server = express();
server.use(express.json());
server.use(express.static(__dirname + "/../public"));
server.use(cors());

// First endpoint: [GET] http://localhost:3000/api/technologies
server.get("/api/technologies", async (req, res) => {
    let technologies = await Technology.find();
    technologies = technologies.map((technology) => {
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
        return technology;
    });
    return res.send({error:false, data:technologies});
});

// Second endpoint: [GET] http://localhost:3000/api/technology/{id}
server.get("/api/technology/:id", async (req, res) => {
    const {id} = req.params;
    let technology = await Technology.findById(id);
    technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
    return res.send({error:false, data:technology});
});

// Third endpoint: [GET] http://localhost:3000/api/technology/search/{name}
server.get("/api/technology/search/:name", async (req, res) => {
    const {name} = req.params;
    let technologies = await Technology.find({
        name:{$regex:new RegExp(name,"i")} // "$regex" is the way to use regular expressions in mongoose.
    });
    technologies = technologies.map((technology) => {
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
        return technology;
    });
    return res.send({error:false, data:technologies});
});

module.exports = server;