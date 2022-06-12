const express = require("express");
const router = express.Router();
const { Theater } = require("../models/theater");

router.post("/", async (req, res) => {
 const theater = new Theater(req.body);
 await theater.save();
 return res.send({ theater });
});

router.get("/", async (req, res) => {
    try {
        const theaters = await Theater.find({});
        res.send(theaters);
    }catch(error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
});

router.get("/:id", async (req, res) => {
    try {
        const theater = await Theater.findById(req.params.id);
        res.send(theater);
    }
    catch(error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
});

module.exports = router;
