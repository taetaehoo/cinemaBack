const { Router } = require("express");
const reviewRouter = Router({ mergeParams: true }); 
const { Review } = require("../models/review");
const { isValidObjectId } = require("mongoose");
const { Movie } = require("../models/movie");
const { Member } = require("../models/member");





module.exports = reviewRouter;