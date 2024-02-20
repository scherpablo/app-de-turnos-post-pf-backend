const {
  getAllUsersController,
  postUserController,
  getUserByIdController,
} = require("../../controllers/UsersControllers/usersControllers");

const getAllUsers = async (req, res) => {
  try {
    const response = await getAllUsersController();
    if (response.error) return res.status(404).json(response.response);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const postUsers = async (req, res) => {
  const { name, surname, birthdate, dni, email, telephone } = req.body;
  try {
    const response = await postUserController({
      name,
      surname,
      birthdate,
      dni,
      email,
      telephone,
    });
    if (response.error) return res.status(404).json(response.response);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getUserByIdController(id);
    if (response.error) return res.status(404).json(response.response);
    const {name,surname,birthdate,dni,telephone}=response
    return res.status(200).json({id,name,surname,birthdate,dni,telephone});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllUsers, postUsers,getUserById };
