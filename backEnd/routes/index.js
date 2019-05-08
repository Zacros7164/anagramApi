var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post("/anagramTest", (req, res) => {
  const { word1, word2 } = req.body;

  let sorted1 = word1.split("").sort();
  let sorted2 = word2.split("").sort();
  let results = true;

  if(sorted1.length == sorted2.length){
    for(let i = 0; i <= sorted1.length; i++){
      if(sorted1[i] != sorted2[i]){
        results = false;
        break
      }else{
        continue
      }
    }
  }else{
    results = false;
  }

  res.json({
    results
  })
});




module.exports = router;
