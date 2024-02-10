const express = require('express');
const getAllUsers = require('../../handlers/usersHandlers');
const router = express.Router();

router.get('/',getAllUsers)

module.exports = router;