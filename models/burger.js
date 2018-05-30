// Create a Burger model with columns
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    name: {
      type: DataTypes.STRING
    }
  });
  return Burger;
};