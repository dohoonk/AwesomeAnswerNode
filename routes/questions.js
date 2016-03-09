var express  = require("express"),
    router   = express.Router(),
    Question = require("../models/question");

router.get("/new", function(request, response, next){
  // response.end("Create New Question");
  response.render("questions/new");
});

router.post("/", function(request, response, next){
  var question = new Question({title: request.body.title,
                               body:   request.body.body});
  question.save(function(err, question){
    if(err) {
      response.end("Got errors!");
    } else {
      response.end(question._id.toString());
    }
  });
});

module.exports = router;
