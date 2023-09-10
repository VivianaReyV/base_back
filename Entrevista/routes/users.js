const { error } = require('console');
var logica = require ('../logic/users.logic.js')

var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  logica.getEmails((error, result) => {
    if(error) {
      throw error
    }
    res.status(200).send(result)
  })
});

/* POST users. */
router.post('/', function(req, res) {
  const { id, email } = req.body

  logica.postEmail([id, email],(error, result) => {
    if(error) {
      throw error
    }
    res.status(201).send('id insertadito: ' + result)
  })
});

module.exports = router;


