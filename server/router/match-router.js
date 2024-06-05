const express = require("express");
const router = express.Router();
const matchController = require("../controllers/match-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/matches").get(authMiddleware, matchController.getMatches);

module.exports = router;