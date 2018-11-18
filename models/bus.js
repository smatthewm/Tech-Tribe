module.exports = function(sequelize, DataTypes) {

    //Simple model with a couple fields
    const Bus = sequelize.define('bus', {
      busNumber: {
        type: DataTypes.INTEGER
      }
    });

    Bus.associate = db => {
      Bus.belongsTo(db.driver, {
        alias: 'busDriver',
        as: 'busDriver',
        foreignKey: 'busNumber',
        targetKey: 'busNumber',
        timestamps: false,
        scope: {
          
        }
      });
      
      Bus.hasMany(db.student, {
        alias: 'roster',
        as: 'roster',
        foreignKey: 'busNumber',
        sourceKey: 'busNumber',
        timestamps: false,
        scope: {
          
        }
      });
    };

    return Bus;
  }