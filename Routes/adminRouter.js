const express = require('express')
const { createAdmin, login } = require('../Controller/admin')
const admin = express.Router()

admin.post('/createadmin',createAdmin)
admin.post('/login',login)

module.exports = {admin}