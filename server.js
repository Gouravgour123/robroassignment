const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { admin } = require('./Routes/adminRouter');
const { supervisorRouter } = require('./Routes/superVisorRouter');
const { workerRoute } = require('./Routes/workerRoute');
require('./mongoose')

const app = express();
const PORT = 3000;
app.use(bodyParser.json());


// app.use('/auth', authRoutes);
app.use('/admin', admin);
app.use('/superVisor', supervisorRouter);
app.use('/worker', workerRoute);





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
