var express = require('express');
var router = express.Router();
var db = require('../libs/db.js');

/* GET users listing. */
router.get('/findAll', function (req, res, next) {
  function getStudents() {
    return new Promise(function (resolve, reject) {
      db.query("SELECT * FROM `students`", [], (data) => {
        resolve(data)
      })
    })
  }

  function sendStudents(data) {
    res.jsonp({
      status: 1,
      data
    });
  }
  getStudents().then(sendStudents)

});

module.exports = router;