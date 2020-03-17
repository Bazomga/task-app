const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

