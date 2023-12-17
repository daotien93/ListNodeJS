const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const AccountModel = require('./models/accounts')

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

//Router
app.post('/register', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    AccountModel.findOne({
        username: username
    })
    .then(data => {
        if (data) {
            res.json('User already list user')
        } else {
            return AccountModel.create({
                username: username,
                password: password
            })
        }
    })
    .then(data => {
        res.json('Create account successfully')
    })
    .catch(err => {
        res.status(500).json('Create account failed')
    }) 
})

//Login
app.post('/login', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    AccountModel.findOne({
        username: username,
        password: password
    })
    .then(data => {
        if (data) {
            res.json('Login successfully')
        } else {
            res.status(500).json('Account not found')
        }
    }) 
    .catch(err => {
        res.status(500).json('Error server')
    })
})

app.listen(port, () => {
    console.log(`Server started on ${port}`)
})