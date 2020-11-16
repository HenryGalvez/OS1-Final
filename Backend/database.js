const mongoose = require('mongoose')

mongoose.connect('mongodb://54.236.17.217:80/angular-auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Database is Connected'))
.catch(err => console.log(err))
