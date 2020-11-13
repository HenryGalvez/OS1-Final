const express = require('express')
const app = express()
const cors = require('cors')

//this is for use mongoDB
const mongo = require('./dbo/database')

app.use(cors())
app.use(express.json())

app.use('/api/user',require('./routes/user'))
app.use('/api/task',require('./routes/task'))

app.listen(3000)
console.log('Server on port', 3000)