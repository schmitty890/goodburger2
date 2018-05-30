var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    //find all entries for a table when used with no options
    // db.Burgers.findAll({}).then(function(burgerInfo) {
      //we have access to the todos as an argument inside of the cb
      // console.log(result);
      // res.render("index", {burgers: burgerInfo});

      var burgerInfo = [{
                  id: 1,
                  burger_name: 'cheeseburger',
                  devoured: 0,
                  createdAt: '2018-05-23T15:23:38.000Z' },
                 {
                  id: 2,
                  burger_name: 'bacon cheeseburger',
                  devoured: 0,
                  createdAt: '2018-05-23T15:23:38.000Z' },
                 {
                  id: 3,
                  burger_name: 'hamburger',
                  devoured: 0,
                  createdAt: '2018-05-23T15:23:38.000Z' },
                 {
                  id: 4,
                  burger_name: 'bacon burger',
                  devoured: 1,
                  createdAt: '2018-05-23T15:24:01.000Z' },
                 {
                  id: 5,
                  burger_name: 'cheeseburger',
                  devoured: 1,
                  createdAt: '2018-05-23T15:25:10.000Z' },
                 {
                  id: 6,
                  burger_name: 'bacon cheeseburger',
                  devoured: 0,
                  createdAt: '2018-05-23T15:25:10.000Z' },
                 {
                  id: 7,
                  burger_name: 'hamburger',
                  devoured: 0,
                  createdAt: '2018-05-23T15:25:10.000Z' },
                 {
                  id: 8,
                  burger_name: 'bison burger',
                  devoured: 1,
                  createdAt: '2018-05-23T16:25:36.000Z' },
                 {
                  id: 9,
                  burger_name: 'bigger bison burger',
                  devoured: 1,
                  createdAt: '2018-05-23T16:26:12.000Z' }];
      res.render("index",{burgers: burgerInfo});
      // res.json(result);
    });
  // });
};