// in node you must call the library eachtime u require it
var express = require("express"),
    router = epxpress.Router();

router.get("/new", functino(request, response, next){
  response.end("Create New Question");
});

//Specific to node js we need to define this to pass the varaible to other
//routes

module.exports = router;
