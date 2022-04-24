const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('articles/new')
} )

router.post('/', (req, res) => {
    
} )
module.exports = router