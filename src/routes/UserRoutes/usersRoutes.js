const express = require('express');
const {getAllUsers,postUsers} = require('../../handlers/UsersHandlers/usersHandlers');
const router = express.Router();

router.get('/',getAllUsers)
router.post('/',postUsers)

module.exports = router;