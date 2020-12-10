const faker = require("faker/locale/es");

module.exports = () => {
  const students = [];

  for (let i = 0; i < 50; i++) {
    students.push({
      name: faker.fake("{{name.firstName}} {{name.lastName}}"),
      score: faker.random.number(100),
      id: faker.random.uuid(),
    });
  }

  return {
    students,
  };
};
