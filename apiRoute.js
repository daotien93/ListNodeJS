const express = require('express')
var router = express.Router()

router.get('/product', (req, res) => {
    res.json('Router 1')
})

router.get('/car', (req, res) => {
    res.json('Router 1')
})


module.exports = router