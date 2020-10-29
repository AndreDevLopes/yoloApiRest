'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.createTable("camera",{
      id:{
        type: Sequelize.INTEGER,
        primareKey: true,
        autoIncrement:true,
        allowNull:false,
      },
      nome:{
        type: Sequelize.STRING,
      },
      quantidade:{
        type:Sequelize.INTEGER
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    
       return queryInterface.dropTable('camera');
     
  }
};
