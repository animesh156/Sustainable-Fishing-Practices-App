const rateLimit = require('express-rate-limit')

const apiLimiter = rateLimit({
    windowMs: 30 * 60 * 1000, // 30 minutes
    max: 80, // 40 requests per IP
    message: "Too many requests from this IP, please try again later."
})

module.exports = {apiLimiter}