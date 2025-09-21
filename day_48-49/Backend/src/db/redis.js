const redis = require('ioredis')

const redisclient= new redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
})

redisclient.on('connect',()=>{
    console.log("redis connected")
})

module.exports = redisclient