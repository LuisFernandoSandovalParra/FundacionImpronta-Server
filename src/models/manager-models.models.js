'use strict'

const sequelize = require('../../config/config');
const User = require('./user.models');
const Project = require('./project.models');
const Donation = require('./donation.models');
const Volunteering = require('./volunteering.models');
const Credential = require('./credential.models');
const Course = require('./course.models');
const Module = require('./module.models');
const Student = require('./student.models');
const Transaction = require('./transaction.models');
const Class = require('./Class.models');

const mySequelize = async () => {
    User.belongsToMany(Project, { through: Donation, foreignKey: 'user_id' });
    User.belongsToMany(Project, { through: Volunteering, foreignKey: 'user_id' });
    User.hasOne(Credential, { foreignKey: 'user_id' });
    Project.belongsToMany(User, { through: Donation, foreignKey: 'project_id', allowNull: true });
    Project.belongsToMany(User, { through: Volunteering, foreignKey: 'project_id' });
    Course.hasMany(Module, { foreignKey: 'course_id' });
    Course.belongsToMany(User, {through: Student, foreignKey: 'course_id'});
    User.belongsToMany(Course, {through: Student, foreignKey: 'user_id'});
    User.belongsToMany(Course, {through: Transaction, foreignKey: 'user_id'});
    Course.belongsToMany(User, {through: Transaction, foreignKey: 'course_id'});
    Module.hasMany(Class, { foreignKey: 'module_id' });
}

module.exports = mySequelize;
