module.exports = function(sequelize, DataTypes) {


    return sequelize.define('driver', {
      busNumber: {
        type: DataTypes.INTEGER
      },
      driver: {
        type: DataTypes.STRING
      }
    });
  }