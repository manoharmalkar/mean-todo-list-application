var express = require('express');
var router = express.Router();

var todolist = require('../controllers/todlist');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(path.join(__dirname, '../views', 'index.html'));
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

router.post('/createTask', function(req, res, next) {
  todolist.createTask(req, res);
});

router.post('/getTask', function(req, res, next) {
  todolist.getTask(req, res);
});

router.post('/getTaskById', function(req, res, next) {
  todolist.getTaskById(req, res);
});

router.post('/deleteTask', function(req, res, next) {
  todolist.deleteTask(req, res);
});


module.exports = router;
