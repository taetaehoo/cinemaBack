const express = require("express");
const app = express();
const mongoose = require("mongoose");

const hostname = "127.0.0.1";
const port = 8000;
const cors = require('cors');
const bodyParser = require('body-parser');

const DB_URI = "mongodb://127.0.0.1:27017/cinema";

const memberController = require("./routers/memberController");
const movieController = require("./routers/movieController");
const recommendationController = require("./routers/recommendationController");
const reviewController = require("./routers/reviewController");
const screenController = require("./routers/screenController");
const seatController = require("./routers/seatController");
const theaterController = require("./routers/theaterController");

const server = async () => {
    try {
        await mongoose.connect(DB_URI);
        app.use(cors({origin: "http://localhost:3000"}));
        app.use(express.json());
        app.use("/member", memberController);
        app.use("/movie", movieController);
        app.use("/theater", theaterController);
        app.use("/screen", screenController);
        app.use("/seat", seatController);
        app.listen(port, hostname, function () {
            console.log("DB connect SUCCESS");
        })
    }catch(error) {
        console.log(error);
        console.log("DB connect FAIL");
    }
    app.get("/", function(req,res) {
        return res.send("hello worlds");
    })
}

server();