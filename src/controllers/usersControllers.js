const { User } = require("../db");

const getAllUsersController = async () => {
  const data = await User.findAll({
    where: { isDeleted: false },
  });

  if (!data || data.length === 0) {
    return {
      error: true,
      response: "no hay usuarios creados",
    };
  }

  return data;
};

const postUserController = async (data) => {
  const { name, surname, birthdate, dni, email, telephone } = data;
  if (!name || !surname || !birthdate || !dni || !email || !telephone) {
    return {
      error: true,
      response: "no hay usuarios creados",
    };
  }
};
module.exports = getAllUsersController;
