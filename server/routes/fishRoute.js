const express = require('express')
const router = express.Router()
const axios = require('axios')
const {apiLimiter} = require('../middleware/rateLimiter')


router.get('/fish', apiLimiter, async(req,res) => {
    try {
        const response = await axios.get(
            "https://fish-species.p.rapidapi.com/fish_api/fishes",
            {
              headers: {
                "x-rapidapi-key": process.env.API_KEY, // Ensure your API key is correctly set in .env
                "x-rapidapi-host": "fish-species.p.rapidapi.com",
              },
            }
          );
          const limitedData = response.data.slice(0, 30)
          res.status(200).json(limitedData)
    } catch (error) {
        console.log("error fetching data", error)
        res.status(500).json({msg: "error fetching data from external api"})
    }
})


module.exports = router;