const mongoose = require('mongoose')

function connect() { 
mongoose.connect('mongodb://andre:10novembro@ac-colwait-shard-00-00.twrrevg.mongodb.net:27017,ac-colwait-shard-00-01.twrrevg.mongodb.net:27017,ac-colwait-shard-00-02.twrrevg.mongodb.net:27017/test?replicaSet=atlas-dfpt8e-shard-0&ssl=true&authSource=admin')

const db = mongoose.connection

    db.once('open', () => {
        console.log('connected to database!')
    })

    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}
