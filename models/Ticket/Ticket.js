const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    tickeNumber:{
        type: String,
        required: true,
        trim: true,

    },
    consumer: {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
    theater: {
        name: {
            type: String,
            required: true,
        },
        location:{
            type: String,
            required: true,
        }
    },
    movie: {
        name: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        screenTime: {
            type: Date,
            required: true,
        }
    },
    seatNo: {
        type: Number,
        required: true,
    },
    screenType: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, {timestamps: true})

const Ticket = mongoose.model('ticket', ticketSchema)

module.exports = Ticket;