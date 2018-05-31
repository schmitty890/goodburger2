// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/burgers", function(req, res) {
    //find all entries for a table when used with no options
    db.Burger.findAll({}).then(function(result) {
      //we have access to the todos as an argument inside of the cb
      res.json(result);
    });
  });

  // post route for new burgers
  app.post("/burgers/new", function(req, res) {
    console.log(req.body);
    // insert burger function from model with req body as burger name and call back the data to log and redirect back home
    db.Burger.create({
      burger_name: req.body.burger_name
    //   // createdAt: req.body.created_at
    }).then(function(result) {
      // `result` here would be the newly created burger
      // console.log(result);
      res.json(result);
    }).catch(function(err) {
      //if there is an error, send it to the client js
      res.json(err);
    });
  });

  // put route for updated burger
  app.put("/burgers/:id", function(req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      console.log('burger updated');
      res.json(result);
    });
  });
};

