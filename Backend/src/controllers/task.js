const Task = require('../models/Task');

module.exports = {
    insertNew: async (req, res, next) => {
        const { title, description, dateEnd, idUser } = req.body
        const newTask = new Task({ title, description, dateEnd, state: false, userId: idUser })
        await newTask.save()
        res.status(200).json({ message: 'Successfully!!' })
    },
    getAllById: async (req, res, next) => {
        const { idUser } = req.body
        const tasks = await Task.find({ userId: idUser })
        if (!tasks) return res.status(404).send({ message: "Error to find yours Task.", data: [] });
        return res.status(200).json({ message: "Successfully", data: tasks })
    },
    deleteTask: async (req, res, next) => {
        const re = await Task.deleteOne({_id: req.body._id})
        if(!re || !re.n || re.n == 0 ){
            res.status(500).json({ message: 'Error in operation' })    
        }
        res.status(200).json({ message: 'Successfully!!' })
    }
};