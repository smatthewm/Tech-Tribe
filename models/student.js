module.exports = function(sequelize, DataTypes) {


    return sequelize.define('student', {
      studentName: {
        type: DataTypes.STRING
      },
      guardianName: {
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