const { User } = require("../../db");

const getAllUsersController = async () => {
  const data = await User.findAll({
    where: { isDeleted: false },
  });

  if (!data || data.length === 0) {
    return {
      error: true,
      response: "No hay usuarios creados.",
    };
  }

  return data;
};

const postUserController = async (data) => {
  const { name, surname, birthdate, dni, email, telephone } = data;
  if (!name || !surname || !birthdate || !dni || !email || !telephone) {
    return {
      error: true,
      response: "Faltan datos.",
    };
  }

  const [NewUser, created] = await User.findOrCreate({
    where: { dni },
    defaults: {
      name,
      surname,
      birthdate,
      email,
      telephone,
    },
  });

  if (!created) {
    return {
      error: true,
      response: "El usuario ya existe.",
    };
  }

  return NewUser;
};
module.exports = { getAllUsersController, postUserController };
