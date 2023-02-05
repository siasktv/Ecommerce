const express = require("express")
const router = express.Router()
const { createReview, getReview } = require("../controllers/reviewsControllers.js")

router.post("/:id", createReview);
router.get("/:id", getReview);
module.exports = router;