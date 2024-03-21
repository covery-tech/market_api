'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    const rolesData = [
      { id: 1, description: 'admin', enabled: true },
      { id: 2, description: 'superadmin', enabled: true },
      { id: 3, description: 'pas', enabled: true },
      { id: 4, description: 'client', enabled: true },
    ];
    try{
      await queryInterface.bulkInsert('user_roles', rolesData);

    }catch(err){
      console.log(err)
    }

  },
  async down(queryInterface, Sequelize) {
  },
};
