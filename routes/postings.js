var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Respond with all postings');
});

router.get('/:id', function(req, res){
  res.send('Posting ' + req.params.id);
});

module.exports = router;
