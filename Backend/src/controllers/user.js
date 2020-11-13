const gererateToken = require('../security/verify').generateToken;
const User = require('../models/User');
var bcrypt = require('bcrypt');

module.exports = {

    signup: async (req, res, next) => {
        const { email, password, name, username } = req.body
        bcrypt.hash(password, 10, async (error, hash) => {
            if (error) {
                res.status(500).json({ message: 'Erro to create user' })
            }
            const newUser = new User({ email, password: hash, name, username })
            await newUser.save()
            const token = gererateToken(newUser);
            res.status(200).json({ token: token, message: 'Successfully!!' })
        });
    },
    signin: async (req, res, next) => {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) return res.status(400).send({ message: "this email does not exists" })
        bcrypt.compare(password, user.password, function (err, result) {
            if (result == true) {
                const token = gererateToken(user);
                return res.status(200).json({ token: token, message: "Successfully!!" })
            } else {
                res.status(401).send({ message: 'Wrong password' })
            }
        });
    },
    info: async (req, res, next) => {
        const { idUser } = req.body
        const user = await User.findOne({ _id: idUser })
        if (!user) return res.status(400).send({ message: "this user does not exists" });
        delete user._id;
        console.log(user)
        user.password = '';
        return res.status(200).json({ message: "Successfully!!", data: user })
    }
};