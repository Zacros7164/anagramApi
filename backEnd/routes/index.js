var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post("/anagramTest", (req, res) => {
  const { word1, word2 } = req.body;
  let word1Array = word1.split("")
  let word2Array = word2.split("")
  let sorted1 = [...word1Array].sort();
  let sorted2 = [...word2Array].sort();
  let results = true;
  console.log(word2Array)
  console.log(sorted2)

  if (word1Array[0] != word2Array[0]) {
    if (sorted1.length == sorted2.length) {
      for (let i = 0; i <= sorted1.length; i++) {
        if (sorted1[i] != sorted2[i]) {
          results = false;
          break
        } else {
          continue
        }
      }
    } else {
      results = false;
    }
  }else{
    results = false;
  }



  res.json({
    results
  })
});




module.exports = router;
