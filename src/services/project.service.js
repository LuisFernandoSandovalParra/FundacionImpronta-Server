'use strict'

const projectRepository = require('../repositories/project.repository')

const createProject = async (projectData) => {
    const existingProject = await projectRepository.getProjectById(projectData.id);
    if (existingProject) {
        throw new Error("El proyecto ya existe.");
    }
    return await projectRepository.createProject(projectData);
}

const getProject = async (projectId) => {
    const project = await projectRepository.getProjectById(projectId);
    if (!project) {
        throw new Error("El proyecto no existe.");
    }
    return project;
}

const getProjectList = async () => {
    const projectList = await projectRepository.getAllProjects();
    if (!projectList) {
        throw new Error("La lista de proyectos esta vacía.");
    }
    return projectList;
}

const updateProject = async (projectId, projectData) => {
    const existingProject = await projectRepository.getProjectById(projectId);
    if (!existingProject) {
        throw new Error("El proyecto no existe.");
    }
    return await projectRepository.updateProject(projectId, projectData);
}

const deleteProject = async (projectId) => {
    const existingProject = await projectRepository.getProjectById(projectId);
    if (!existingProject) {
        throw new Error("El proyecto no existe.");
    }
    await projectRepository.deleteProject(projectId);
}

module.exports = { createProject, getProject, getProjectList, updateProject, deleteProject };