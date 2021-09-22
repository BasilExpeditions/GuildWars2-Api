const axios = require('axios')
require('dotenv').config()

const APIKEY = process.env.API_KEY

const characterURL = 'https://api.guildwars2.com/v2/characters/Gribjorn/inventory'

const config = {
    headers: {
        'Authorization': `Bearer ${APIKEY}`
    }
}

axios.get(characterURL, config).then(
    res => {
        console.log(res.data.bags)
    }
).catch(error => {
    console.log(error)
})