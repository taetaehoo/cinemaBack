const { Router } = require("express");
const ScreenRouter = Router({ mergeParams: true }); 
const { Screen } = require("../models/screen");
const { isValidObjectId } = require("mongoose");
const { Movie } = require("../models/movie");
const { Theater } = require("../models/theater");

ScreenRouter.post("/", async(req, res) => {
    const screen = new Screen(req.body);
    await screen.save();
    return res.send({screen});
});

ScreenRouter.get("/", async(req, res) => {
    try {
        const screens = await Screen.find({});
        res.send(screens);
    }catch(error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
});

ScreenRouter.get("/movie/:movie", async(req, res) => {
    try {
        const screens = await Screen.find({"movie":req.params.movie});
        res.send(screens);
    }catch(error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
});

ScreenRouter.get("/theater/:theater", async(req, res) => {
    try {
        const screens = await Screen.find({"theater":req.params.theater});
        res.send(screens);
    }catch(error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
})

module.exports = ScreenRouter;