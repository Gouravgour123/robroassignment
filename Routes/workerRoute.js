const express = require('express')
const { worker,  deleteWorker } = require('../Controller/worker')
const workerRoute = express.Router()

workerRoute.post('/createWorker',worker)
workerRoute.delete('/deleteWorker',deleteWorker)

module.exports = {workerRoute}