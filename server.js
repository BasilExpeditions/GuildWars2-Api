const axios = require('axios')

require('dotenv').config()

const baseURL = 'https://api.guildwars2.com/v2/account'

const APIKEY = process.env.API_KEY

const config = {
    headers: {
        'Authorization': `Bearer ${APIKEY}`
    }
}

axios.get(baseURL, config)
    .then(
        res => {
            console.log(`Name: ` + res.data.name);
            console.log(`Age: ` + res.data.age);
            console.log(`Created: ` + res.data.created);
            console.log(`Commander: ` + res.data.commander);
            console.log(`Fractal Level: ` + res.data.fractal_level);
            console.log(`Daily Achievement Points: ` + res.data.daily_ap);
            console.log(`Monthly Achievement Points: ` + res.data.monthly_ap);
            console.log(`WvW Rank: ` + res.data.wvw_rank);
        }).catch(
            (error) => console.log(error));
