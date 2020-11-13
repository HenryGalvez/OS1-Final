//const router = require("express-promise-router")();
const { Router } = require('express')
const router = Router()
const verifyToken = require('../security/verify').verifyToken;

const { 
    getAllById,
    insertNew,
    deleteTask
} = require("../controllers/task");

router.get("/tasks", verifyToken,getAllById);
router.post("/insert-task", verifyToken,insertNew);
router.post("/delete-task", verifyToken,deleteTask);


module.exports = router;