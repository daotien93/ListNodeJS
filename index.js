const express = require('express')
const app = express()
const port = 3000
const router = require('./apiRoute.js')

app.use('/api/v1', router)

app.listen(port, () => {
    console.log(`Listening port ${port}`)
})