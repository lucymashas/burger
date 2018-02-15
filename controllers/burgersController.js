var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burger.js");

// Routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var foodObject = {
      burger: data
    };
    res.render("index", foodObject);
  });
});

router.post("/burgers", function(req, res) {
  console.log(req.body.name);
  burger.insert(["burger_name","devoured"],[req.body.name,true],
     function(result){
        res.json({id: result.insertId});
  }); 
});









// Export routes for server.js to use.
module.exports = router;
