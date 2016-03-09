var express = require("express"),
    router  = express.Router();

router.get("/new", function(request, response, next){
  // response.end("Create New Question");
  response.render("questions/new");
});

module.exports = router;
