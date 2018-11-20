module.exports = function(sequelize, DataTypes) {


    const Student = sequelize.define('student', {
      studentName: {
        type: DataTypes.STRING
      },
      guardianName: {
        type: DataTypes.STRING
      },
      busNumber: {
        type: DataTypes.INTEGER
      }

    });

    return Student;
  }