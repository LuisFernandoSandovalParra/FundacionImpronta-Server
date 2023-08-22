'use strict'

const courseService = require('../services/course.service');

const createCourse = async (req, res) => {
    const { name, url_image, course_type, substantive_function, hours_number, value } = req.body;
    try {
        const courseConfirm = await courseService.createCourse({ name, url_image, course_type, substantive_function, hours_number, value })
        res.status(200).json({ ok: true, info: courseConfirm })
    } catch (error) {
        res.status(500).json({ ok: true, info: error })
    }
}

const getCourse = async (req, res) => {
    const { course_id } = req.params;
    try {
        const course = await courseService.getCourse(course_id);
        res.status(200).json({ ok: true, info: course })
    } catch (error) {
        res.status(500).json({ ok: true, info: error })
    }
}

const getCoursesList = async (req, res) => {
    try {
        const coursesList = await courseService.getAllCourses();
        res.status(200).json({ ok: true, info: coursesList })
    } catch (error) {
        res.status(500).json({ ok: true, info: error })
    }
}

const updateCourse = async (req, res) => {
    const { course_id } = req.params;
    const { name, url_image, course_type, substantive_function, hours_number, value } = req.body;
    try {
        const courseUpdated = await courseService.updateCourse(course_id, { name, url_image, course_type, substantive_function, hours_number, value, updatedAt: now()});
        res.status(200).json({ ok: true, info: courseUpdated })
    } catch (error) {
        res.status(500).json({ ok: true, info: error })
    }
}

const deleteCourse = async (req, res) => {
    const { course_id } = req.params;
    try {
        await courseService.deleteCourse(course_id);
        res.status(200).json({ ok: true, info: "Correctamente eliminado" })
    } catch (error) {
        res.status(500).json({ ok: true, info: error })
    }
}

module.exports = { createCourse, getCourse, getCoursesList, updateCourse, deleteCourse };
