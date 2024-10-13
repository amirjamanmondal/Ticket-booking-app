const mongoose = require('mongoose')

const producerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    about:{
        type: String,
        required: true,
    },
    company:{
        type: String,
        required: true,
    },
    films:{
        type: Array,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    }
})

const Producer = mongoose.model('producer', producerSchema)

module.exports = Producer;