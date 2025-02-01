const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const fishRoute = require('./routes/fishRoute')


app.use(cors())

app.use('/api', fishRoute)



app.listen(port, () => {
    console.log(`server is listening at ${port}`)
})