const mongoose = require('mongoose')

const theaterSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    place:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    screen:{
        type: String,
        required: true,
    },
    availability:{
        type: Boolean,
        required: true,
    },
    services:{
        type: String,
    },
}, {timestamps: true})

const Theater = mongoose.model('theater', theaterSchema)

module.exports = Theater;