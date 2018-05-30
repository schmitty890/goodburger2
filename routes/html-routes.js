var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the Burgers
  app.get("/", function(req, res) {
    //find all entries for a table when used with no options
    db.Burger.findAll({}).then(function(burgerInfo) {
      //we have access to the Burger as an argument inside of the cb
      // console.log(burgerInfo);
      res.render("index", {burgers: burgerInfo});
    });
  });
};