const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
    title: String,
    description: String,
    userId: String,
    dateEnd: Date,
    state: Boolean
}, {
    timestamps: true
})

module.exports = model('Task', taskSchema)