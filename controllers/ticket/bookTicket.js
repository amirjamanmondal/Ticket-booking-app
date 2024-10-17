const jwt = require('jsonwebtoken')
const Ticket = require('../../models/Ticket/Ticket')
const User = require('../../models/User/User')

const BookTicket = async(req, res) => {
    try {
        const user = req.user;
        var {consumer:{name, age}, theater: {name,location}, movie:{name, genre, screenTime}, seatNo, screenType, catergory, price} = req.body;
    
        const token = req.cookies.login;
    
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
    
        const userId = decoded.userId;
    
        const data = await User.findById({_id: userId}).select('-password -_id')
    
        if (!data) {
            return res.status.json('user not found and unauthorized')
        }
    
        const ticket = new Ticket({
            consumer: {
                name: user.name,
                age: user.age,
            },
            theater:{
                name: name,
                location: location,
            },
            movie:{
                name: name,
                genre: genre,
                screenTime: screenTime,
            },
            seatNo: seatNo,
            screenType: screenType,
            category: catergory,
            price: price,
        })
    } catch (error) {
        const errMessage = error.meassage;
        res.status(500).json(errMessage);
    }
}

module.exports = BookTicket;