'use strict'

const Course = require('../models/course.models');

const createCourse = async (courseData) => {
    return await Course.create(courseData);
}

const getAllCourses = async () => {
    return await Course.findAll();
}

const getCourseById = async (courseId) => {
    return await Course.findByPk(courseId);
}

const updateCourse = async (courseId, courseData) => {
    return await Course.update(courseData, { where: { id: courseId } });
}

const deleteCourse = async (courseId) => {
    await Course.destroy({ where: { id: courseId } });
}

module.exports = {createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse}