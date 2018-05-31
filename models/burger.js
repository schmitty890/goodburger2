// Create a Burger model with columns
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: false
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};