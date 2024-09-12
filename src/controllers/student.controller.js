'use strict'

const studentService = require('../services/student.service')
const courseService = require('../services/course.service')
const userService = require('../services/user.service')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const assignStudentToCourse = async (req, res) => {
    const { user_id, course_id } = req.body;
    try {
        const assignedStudent = await studentService.assignStudentToCourse({ user_id, course_id });
        res.status(200).json({ ok: true, info: assignedStudent })
    } catch (Error) {
        res.status(500).json({ ok: true, info: Error })
    }
}

const getCoursesByStudent = async (req, res) => {
    const { user_id } = req.params;
    jwt.verify(req.token, 'secretkey', async (error) => {
        if (!error) {
            try {
                const courses = []
                await studentService.getCoursesByStudent(user_id).then(async (result) => {
                    for (let i = 0; i < result.length; i++) {
                        courses.push(await courseService.getCourse(result[i].dataValues.course_id))
                    }
                });
                res.status(200).json({ ok: true, info: courses });
            } catch (Error) {
                res.status(500).json({ ok: true, info: Error })
            }
        }
    })
}

module.exports = { assignStudentToCourse, getCoursesByStudent }