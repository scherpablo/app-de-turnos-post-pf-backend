const express = require('express');
const {getAllUsers,postUsers} = require('../../handlers/user/usersHandlers');
const router = express.Router();

router.get('/',getAllUsers)
router.post('/',postUsers)

module.exports = router;