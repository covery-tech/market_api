'use strict';
import UserData from '../models/user-personal-data.model';
import User from '../models/user.model';
import UserLocation from '../models/user-location.model';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const admin1 = await queryInterface.rawSelect(
      'user_personal_data',
      {
        where: { email: "alejoaven80@gmail.com" },
      },
      ['id']
    );

    const admin2 = await queryInterface.rawSelect(
      'user_personal_data',
      {
        where: { email: "johndoe@gmail.com" },
      },
      ['id']
    );



  if (!admin1) {
      const userDataId = await queryInterface.insert(
        'users',
        {
          status: true,
          description: null,
          refresh_token: null,
        },
        { returning: true }
      );

      await queryInterface.insert('type_user', {
        id_user: userDataId[0],
        type: '2',
      });

      await queryInterface.insert('personal_data', {
        name: "alejo",
        last_name: "avendaño",
        date: '1/10/2001',
        password: await hash("Alejo123*", 10),
        email: "alejoaven80@gmail.com",
        id_user: userDataId[0],
      });

      await queryInterface.insert('location', {
        users_id: userDataId[0],
      });
    }

  if (!admin2) {
    const userDataId = await queryInterface.insert(
      'users',
      {
        status: true,
        description: null,
        refresh_token: null,
      },
      { returning: true }
    );

    await queryInterface.insert('type_user', {
      id_user: userDataId[0],
      type: '1',
    });

    await queryInterface.insert('personal_data', {
      name: "John",
      last_name: "Doe",
      date: '1/10/2001',
      password: await hash("John123*", 10),
      email: "johndoe@gmail.com",
      id_user: userDataId[0],
    });

    await queryInterface.insert('location', {
      users_id: userDataId[0],
    });
  }

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
