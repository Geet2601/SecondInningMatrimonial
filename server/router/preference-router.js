const express = require("express");
const router = express.Router();
    
const { setPreferences } = require("../controllers/preference-controller");

router.post("/preference", setPreferences);

module.exports = router;
