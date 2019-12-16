const router = require('express').Router()
const list = require('./list')

router.use('/list', list)

module.exports = router