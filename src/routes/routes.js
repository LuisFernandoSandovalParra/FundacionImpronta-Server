'use strict'

const router = require('express').Router();
const userRoutes = require('../routes/user.routes');
const projectRoutes = require('../routes/project.routes');
const emailRoutes = require('../routes/email.routes');
const wompiRoutes = require('./wompi.routes');
const courseRoutes = require('./course.routes');
const moduleRoutes = require('./module.routes');
const transactionRoutes = require('./transaction.routes');

router.use('/api/users', userRoutes);
router.use('/api/projects', projectRoutes);
router.use('/api/courses', courseRoutes);
router.use('/api/modules', moduleRoutes);
router.use('/api/transaction', transactionRoutes);
router.use('/api', emailRoutes);
router.use('/api', wompiRoutes);

module.exports = router;
