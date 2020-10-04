const path = require('path')

const express = require('express')

const router =express.Router()

const routeController = require('../controllers/route')

router.get('/route/:start/:end', routeController.getRoute)

module.exports = router