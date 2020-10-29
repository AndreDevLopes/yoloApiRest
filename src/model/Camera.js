const { Model, DataTypes } = require("sequelize");

class Camera extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        quantidade: DataTypes.INTEGER,

      },
      {
        sequelize,
      }
    );
  }
  
}

module.exports = Camera;