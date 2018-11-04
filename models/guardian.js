module.exports = function(sequelize, DataTypes) {


    return sequelize.define('guardian', {
      guardianName: {
        type: DataTypes.STRING
      },
      studentName: {
        type: DataTypes.STRING
      },
      busNumber: {
        type: DataTypes.INTEGER
      },
      driver: {
        type: DataTypes.STRING
      }
    });
  }