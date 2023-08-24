'use strict'

const Project = require('../models/project.models');

const createProject = async (projectData) => {
    return await Project.create(projectData);
}

const getAllProjects = async () => {
    return await Project.findAll();
}

const getProjectById = async (projectId) => {
    return await Project.findByPk(projectId);
}

const updateProject = async (projectId, projectData) => {
    return await Project.update(projectData, { where: { project_id: projectId } });
}

const deleteProject = async (projectId) => {
    await Project.destroy({ where: { project_id: projectId } });
}

module.exports = { createProject, getAllProjects, getProjectById, updateProject, deleteProject };
