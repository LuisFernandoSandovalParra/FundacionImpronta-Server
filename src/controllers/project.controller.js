'use strict'

const projectService = require('../services/project.service');

const createProject = async (req, res) => {
    const { name, abstract, description, topic, place_of_application, problematic, proposed, population, representative, background, necessary_budget, current_budget, url_image } = req.body;
    try {
        const project = await projectService.createProject({ name, abstract, description, topic, place_of_application, problematic, proposed, population, representative, background, necessary_budget, current_budget, url_image });
        res.status(200).json({ ok: true, info: project });
    } catch (error) {
        res.status(500).json({ ok: false, info: error });
    }
}

const getProject = async (req, res) => {
    const { project_id } = req.params;
    try {
        const project = await projectService.getProject(project_id);
        res.status(200).json({ ok: true, info: project });
    } catch (error) {
        res.status(500).json({ ok: false, info: error });
    }
}

const getProjectList = async (req, res) => {
    try {
        const projectList = await projectService.getProjectList();
        res.status(200).json({ ok: true, info: projectList });
    } catch (error) {
        res.status(500).json({ ok: false, info: error });
    }
}

const updateProject = async (req, res) => {
    const { project_id } = req.params;
    const { abstract, description, topic, place_of_application, problematic, proposed, population, representative, background, necessary_budget, current_budget, url_image } = req.body;
    try {
        const projectUpdated = await projectService.updateProject(project_id, { abstract, description, topic, place_of_application, problematic, proposed, population, representative, background, necessary_budget, current_budget, url_image })
        res.status(200).json({ ok: true, info: projectUpdated });
    } catch (error) {
        res.status(500).json({ ok: false, info: error });
    }
}

const deleteProject = async (req, res) => {
    const { project_id } = req.params;
    try {
        await projectService.deleteProject(project_id);
        res.status(200).json({ ok: true });
    } catch (error) {
        res.status(500).json({ ok: false, info: error });
    }
}

module.exports = { createProject, getProject, getProjectList, updateProject, deleteProject };