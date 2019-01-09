var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolist', { useNewUrlParser: true } ,function (err, data) {
    console.log('mongodb connected')
  });

module.exports = mongoose;