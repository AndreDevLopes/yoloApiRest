const { Model, DataTypes } = require("sequelize");

class Camera extends Model {
  static init(sequelize) {
    super.init(
      {
        ip: DataTypes.INTEGER,
        quantidade: DataTypes.INTEGER,

      },
      {
        sequelize,
      }
    );
  }
  
}

module.exports = Camera;