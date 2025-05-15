const jwt = require("jsonwebtoken")

const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            email: user.email
        },
        process.env.JWT_SECRET
    )
    return sign
}

const tokenSign2 = async (user) => {
    const sign = jwt.sign(
        {
            email: user.email
        },
        process.env.JWT_SECRET2
    )
    return sign
}

const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, process.env.JWT_SECRET)
    }catch(err) {
        console.log(err)
    }
}

const verifyToken2 = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, process.env.JWT_SECRET2)
    }catch(err) {
        console.log(err)
    }
}

module.exports = { tokenSign, tokenSign2, verifyToken, verifyToken2 }