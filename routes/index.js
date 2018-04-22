var express = require('express');
var router = express.Router();



// Home Route
router.get('/', function(req, res){
      res.render('home', {
        title:'Apoorva Yadav'
  });
});

module.exports = router;
