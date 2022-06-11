const { Router } = require("express");
const recommendationRouter = Router({ mergeParams: true }); 
const { Recommendation } = require("../models/recommendation");
const { isValidObjectId } = require("mongoose");
const { Review } = require("../models/review");
const { Member } = require("../models/member");





module.exports = recommendationRouter;