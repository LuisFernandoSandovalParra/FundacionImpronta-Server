'use strict'

const courseRepository = require('../repositories/course.repository');

const createCourse = async (courseData) => {
    const validCourse = await courseRepository.getCourseById(courseData.id);
    if (validCourse) {
        throw new Error('El curso que intenta crear ya existe')
    }
    return await courseRepository.createCourse(courseData);
}

const getCourse = async (courseId) => {
    const validCourse = await courseRepository.getCourseById(courseId);
    if (!validCourse) {
        throw new Error("El curso que busca, no existe.")
    }
    return validCourse;
}

const getAllCourses = async () => {
    const coursesList = await courseRepository.getAllCourses();
    if (!coursesList) {
        throw new Error("La lista de cursos esta vacia.")
    }
    return coursesList;
}

const updateCourse = async (courseId, courseData) => {
    const validCourse = await courseRepository.getCourseById(courseId);
    if (!validCourse) {
        throw new Error("El curso que desea modificar no existe.");
    }
    return await courseRepository.updateCourse(courseId, courseData);
}

const deleteCourse = async(courseId) =>{
    const validCourse = await courseRepository.getCourseById(courseId);
    if(!validCourse){
        throw new Error("El curso que desea eliminar no existe.")
    }
    await courseRepository.deleteCourse(courseId);
}

module.exports = { createCourse, getCourse, getAllCourses, updateCourse, deleteCourse};