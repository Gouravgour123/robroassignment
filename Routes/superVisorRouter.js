const express = require('express')
const { createSupervisor, deleteSupervisor } = require('../Controller/superSupervisor')
const supervisorRouter = express.Router()

supervisorRouter.post('/createsupervisore',createSupervisor)
supervisorRouter.post('/deleteSupervisor',deleteSupervisor)
// authRoutes.post('/login',login)

module.exports = {supervisorRouter}