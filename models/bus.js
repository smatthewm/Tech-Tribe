module.exports = function(sequelize, DataTypes) {

    //Simple model with a couple fields
    return sequelize.define('bus', {
      busNumber: {
        type: DataTypes.INTEGER
      },
      driver: {
        type: DataTypes.STRING
      }
    });
  }