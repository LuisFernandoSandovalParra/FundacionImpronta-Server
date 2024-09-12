'use strict'

const Student = require('../models/student.models');

//student data se compone por id curso y id estudiante
const assignStudentToCourse = async (studentData) => {
    return await Student.create(studentData);
}

const getCoursesByStudent = async(user_id) =>{
    return await Student.findAll({where: {user_id: user_id}});
}

const getStudentsByCourse = async(course_id) => {
    return await Student.findAll({where: {course_id: course_id}});
}

module.exports = { assignStudentToCourse, getCoursesByStudent, getStudentsByCourse };