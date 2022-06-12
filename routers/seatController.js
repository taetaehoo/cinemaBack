const { Router } = require("express");
const SeatRouter = Router({ mergeParams: true }); 
const { Seat } = require("../models/seat");
const { isValidObjectId } = require("mongoose");
const { Member } = require("../models/member");
const { Theater } = require("../models/theater");

SeatRouter.get("/:id", async (req, res) => {
    try {
        const seat = await Seat.find({"screen":req.params.id});
        res.send(seat);
    }catch(error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
});

SeatRouter.post("/reserve", async (req, res) => {
    const seat = new Seat(req.body);
    await seat.save();
    return res.send({seat});
})

module.exports = SeatRouter;