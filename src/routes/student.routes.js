'use strict'

const { assignStudentToCourse, getCoursesByStudent } = require('../controllers/student.controller');
const {verifyToken} = require('../utils/utils')
const router = require('express').Router();

router.post('/register', verifyToken, assignStudentToCourse);
router.get('/search/courses/:user_id',verifyToken, getCoursesByStudent);

module.exports = router;