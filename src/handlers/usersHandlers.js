const getAllUsersController = require("../controllers/usersControllers");

const getAllUsers = async (req, res) => {
  try {
    const response = await getAllUsersController();
    if (response.error) return res.status(404).json(response.response);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllUsers;
