// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
  // post route for new burgers
  app.post("/burgers/new", function(req, res) {
    // insert burger function from model with req body as burger name and call back the data to log and redirect back home
    db.Burger.create({
      // text: req.body.text,
      // complete: req.body.complete,
      // name: req.body.name
    }).then(function(result) {

    }).catch(function(err) {
      res.json(err);
    });
  });

  // put route for updated burger
  app.put("/burgers/:id", function(req, res) {
    db.Burger.update({
      // complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(result) {
      console.log('burger updated');
      res.json(result);
    });
  });
};

