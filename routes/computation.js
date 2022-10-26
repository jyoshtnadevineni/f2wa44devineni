var express = require('express');
var router = express.Router();
var x=Mrsath.random();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation',
 {answer1:'Math.hypot() applied to '+x+ 'is ' +Math.hypot(x),
 answer2:'Math.ceil()   applied to '+x+ 'is ' +Math.ceil(x),
 answer3:'Math.clz32()  applied to '+x+ 'is ' +Math.clz32(x),
 title: 'computation by jyo'});
});

module.exports = router;
