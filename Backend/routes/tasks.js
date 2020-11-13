var express = require('express');
var router = express.Router();
const verifyToken = require('./security/verify').verifyToken;
const Task = require('./models/Task');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/tasks", verifyToken,async function(req, res, next) {
    const { idUser } = req.body
    const tasks = await Task.find({ userId: idUser })
    if (!tasks) return res.status(404).send({ message: "Error to find yours Task.", data: [] });
    return res.status(200).json({ message: "Successfully", data: tasks })
});

router.post("/insert-task", verifyToken,async function(req, res, next) {
    const { title, description, dateEnd, idUser } = req.body
    const newTask = new Task({ title, description, dateEnd, state: false, userId: idUser })
    await newTask.save()
    res.status(200).json({ message: 'Successfully!!' })
});

router.post("/delete-task", verifyToken,async function(req, res, next) {
    const re = await Task.deleteOne({_id: req.body._id})
    if(!re || !re.n || re.n == 0 ){
        res.status(500).json({ message: 'Error in operation' })    
    }
    res.status(200).json({ message: 'Successfully!!' })
});

module.exports = router;