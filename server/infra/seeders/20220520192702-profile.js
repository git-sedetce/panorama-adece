'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Profiles', [
       {
       name: 'Técnico',
       is_master: false,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        name: 'Usuário',
        is_master: false,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Administrador',
        is_master: true,
        createdAt: new Date(),
        updatedAt: new Date()
       }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('People', null, {});

  }
};
