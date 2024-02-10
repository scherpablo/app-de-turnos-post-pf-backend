const express = require('express');
const router = express.Router();
const userRoutes=require('./UserRoutes/UserRoutes')

router.use('/users', userRoutes)




module.exports = router;