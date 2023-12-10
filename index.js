const express = require('express')
const app = express()
const port = 3000
const router = require('./apiRoute.js')

//Middleware
const checkAdminRole = (req, res, next)=> {
    res.user.role = 'admin'
}

const checkLogin = (req, res, next) => {
    if (Login) {
        req.user = user
        next()
    } else {
        res.json('User cannot be logged in')
    }
}


app.use('/api/v1', router)

app.use('/api/login', checkLogin, checkAdminRole)

app.listen(port, () => {
    console.log(`Listening port ${port}`)
})