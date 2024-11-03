const {z} = require('zod');

const RoomValidator = z.object({
    seatNo: z.number({message: 'This must be a number'}).trim(),
    placement: z.string().trim(),
    booked: z.boolean().default('false')
})

module.exports = RoomValidator;