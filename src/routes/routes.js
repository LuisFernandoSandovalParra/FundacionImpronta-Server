'use strict'

const router = require('express').Router();
const userRoutes = require('../routes/user.routes');
const projectRoutes = require('../routes/project.routes');
const emailRoutes = require('../routes/email.routes');
const wompiRoutes = require('./wompi.routes');
const courseRoutes = require('./course.routes');
const moduleRoutes = require('./module.routes');
const transactionRoutes = require('./transaction.routes');
const credentialRoutes = require('../routes/credential.routes');
const studentRoutes = require('../routes/student.routes')

router.use('/api/users', userRoutes);
router.use('/api/credentials', credentialRoutes);
router.use('/api/projects', projectRoutes);
router.use('/api/courses', courseRoutes);
router.use('/api/modules', moduleRoutes);
router.use('/api/transactions', transactionRoutes);
router.use('/api/students', studentRoutes);
router.use('/api', emailRoutes);
router.use('/api', wompiRoutes);

module.exports = router;
