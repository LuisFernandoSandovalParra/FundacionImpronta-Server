'use strict'

const router = require('express').Router();
const userRoutes = require('../routes/user.routes');
const projectRoutes = require('../routes/project.routes');
const emailRoutes =require('../routes/email.routes');

router.use('/api/users', userRoutes);
router.use('/api/projects', projectRoutes);
router.use('/api', emailRoutes);

module.exports = router;