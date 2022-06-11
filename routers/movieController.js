const express = require("express");
const router = express.Router();
const { Movie } = require("../models/movie");

router.post("/", async (req, res) => {
 const movie = new Movie(req.body);
 await movie.save();
 return res.send({ movie });
});

router.get("/", async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.send(movies);
    }catch(error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
});

router.get("/:id", async(req, res) => {
    try {
        const movies = await Movie.findById(req.params.id);
        res.send(movies);
    }catch(error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
})


module.exports = router;
