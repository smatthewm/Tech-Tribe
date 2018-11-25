module.exports = function(sequelize, DataTypes) {


    return sequelize.define('guardian', {
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      studentFirstName: {
        type: DataTypes.STRING
      },
      studentLastName: {
        type: DataTypes.STRING
      },
      Address: {
        type: DataTypes.STRING
      },
      City: {
        type: DataTypes.STRING
      },
      State: {
        type: DataTypes.STRING
      },
      cellPhone: {
        type: DataTypes.INTEGER
      },
      busNumber: {
        type: DataTypes.INTEGER
      },
      driver: {
        type: DataTypes.STRING
      }
    });
  }