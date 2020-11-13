//const router = require("express-promise-router")();
const { Router } = require('express')
const router = Router()
const verifyToken = require('../security/verify').verifyToken;

const {
    signup,
    signin,
    info
} = require("../controllers/user");

router.post("/signup",signup);
router.post("/signin",signin);
router.get("/info", verifyToken,info);


module.exports = router;