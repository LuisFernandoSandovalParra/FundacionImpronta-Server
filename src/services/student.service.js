'use strict'

const studentRepository = require('../repositories/student.repository');

const assignStudentToCourse = async (studentData) => {
    const studentAssigned = studentRepository.assignStudentToCourse(studentData);
    if (studentAssigned) {
        throw new Error('El estudiante ya esta inscrito en este curso');
    }
    return studentAssigned;
}

const getCoursesByStudent = async (user_id) => {
    const coursesList = studentRepository.getCoursesByStudent(user_id);
    if (!coursesList) {
        throw new Error('La lista no existe o se encuentra vacía.');
    }
    return coursesList;
}

const getStudentsByCourse = async (course_id) => {
    const studentsList = studentRepository.getStudentsByCourse(course_id);
    if (!studentsList) {
        throw new Error('El curso no existe o esta vacío.')
    }
    return studentsList;
}

module.exports = { assignStudentToCourse, getCoursesByStudent, getStudentsByCourse };
