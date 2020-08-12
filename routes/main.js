const path = require('path')

const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('here we go..')
})

module.exports = router