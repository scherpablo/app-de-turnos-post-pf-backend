const express = require('express');
const router = express.Router();
const userRoutes=require('./UserRoutes/usersRoutes')

router.use('/users', userRoutes)




module.exports = router;