'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.createTable("cameras",{
      id:{
        type: Sequelize.INTEGER,
        primareKey: true,
        autoIncrement:true,
        allowNull:false,
      },
      ip:{
        type: Sequelize.INTEGER,
      },
      quantidade:{
        type:Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    
       return queryInterface.dropTable('cameras');
     
  }
};
