const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://localhost:27017/robro').then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));