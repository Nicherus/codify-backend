
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('courses', [{
      name: 'JavaScript do zero!',
      description: 'Aprenda JavaScript do zero ao avançado, com muita prática!',
      image: 'https://static.imasters.com.br/wp-content/uploads/2018/12/10164438/javascript.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Python do zero!',
      description: 'Aprenda Python do zero ao avançado, com muita prática!',
      image: 'https://sujeitoprogramador.com/wp-content/uploads/2019/11/pythondozero.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Java do zero!',
      description: 'Aprenda Java do zero ao avançado, com muita prática!',
      image: 'https://miro.medium.com/max/1200/1*ADqbtRNCtoGE-1bvvoSQdg.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'C# do zero!',
      description: 'Aprenda C# do zero ao avançado, com muita prática!',
      image: 'https://addcode.io/wp-content/uploads/2020/02/csharp.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    const courseTopics = [
      [
        {
          name: 'Apresentação',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Preparando o ambiente',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Introdução à linguagem JS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Variáveis e Tipos de Dados',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Estruturas lógicas e condicionais',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      [
        {
          name: 'Apresentação',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Preparando o ambiente',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Introdução à linguagem Python',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Variáveis e Tipos de Dados',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Estruturas lógicas e condicionais',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      [
        {
          name: 'Apresentação',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Preparando o ambiente',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Introdução à linguagem Java',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Variáveis e Tipos de Dados',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Estruturas lógicas e condicionais',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      [
        {
          name: 'Apresentação',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Preparando o ambiente',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Introdução à linguagem C#',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Variáveis e Tipos de Dados',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Estruturas lógicas e condicionais',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    ];

    const coursesIds = await queryInterface.sequelize.query(
      'SELECT id from courses;',
    );

    const ids = coursesIds[0];

    queryInterface.bulkInsert('topics',
      [
        {
          ...courseTopics[0][0],
          courseId: ids[0].id,
        },
        {
          ...courseTopics[0][1],
          courseId: ids[0].id,
        },
        {
          ...courseTopics[0][2],
          courseId: ids[0].id,
        },
        {
          ...courseTopics[0][3],
          courseId: ids[0].id,
        },
        {
          ...courseTopics[1][0],
          courseId: ids[1].id,
        },
        {
          ...courseTopics[1][1],
          courseId: ids[1].id,
        },
        {
          ...courseTopics[1][2],
          courseId: ids[1].id,
        },
        {
          ...courseTopics[1][3],
          courseId: ids[1].id,
        },
        {
          ...courseTopics[2][0],
          courseId: ids[2].id,
        },
        {
          ...courseTopics[2][1],
          courseId: ids[2].id,
        },
        {
          ...courseTopics[2][2],
          courseId: ids[2].id,
        },
        {
          ...courseTopics[2][3],
          courseId: ids[2].id,
        },
        {
          ...courseTopics[3][0],
          courseId: ids[3].id,
        },
        {
          ...courseTopics[3][1],
          courseId: ids[3].id,
        },
        {
          ...courseTopics[3][2],
          courseId: ids[3].id,
        },
        {
          ...courseTopics[3][3],
          courseId: ids[3].id,
        },
      ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('topics', null, {});
    await queryInterface.bulkDelete('courses', null, {});
  },
};
