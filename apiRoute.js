const express = require('express')
var router = express.Router()

router.get('/product', (req, res) => {
    console.log(req.body)
    res.json('Router 1')
})

router.get('/car', (req, res) => {
    res.json('Router 1')
})

router.post('/product', (req, res, next) => {
    res.json('Router 2')
})


router.delete('/product', (req, res, next) => {
    res.json('Router 2')
})


module.exports = router