const express = require('express')
const router = express.Router()
const burger = require('../models/burger')

router.get("/", function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject)
        res.render('index', hbsObject)
    })
  });

  router.post('/api/burger', function(req, res){
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, false
    ], function(result){
      res.json({id: result.insertId})
    })
    console.log(req.body)
  })
  





  

  module.exports = router;