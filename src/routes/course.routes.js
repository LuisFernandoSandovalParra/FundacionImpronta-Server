'use strict'

const router = require('express').Router();
const {createCourse, getCourse, getCoursesList, updateCourse, deleteCourse} = require('../controllers/course.controller');

router.post('/create', createCourse);
router.get('/search/:course_id', getCourse);
router.get('/list', getCoursesList);
router.put('/update/:course_id', updateCourse);
router.delete('/delete/:course_id', deleteCourse);

module.exports = router;