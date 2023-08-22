'use strict'

const projectService = require('../services/project.service');

const createProject = async (req, res) => {
    const { title, abstract, description, problematic, proposal, url_image, url_video, project_type, state, expected_budget, current_budget } = req.body;
    try {
        const project = await projectService.createProject({ title, abstract, description, problematic, proposal, url_image, url_video, project_type, state, expected_budget, current_budget });
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
    const { abstract, description, problematic, proposal, url_image, url_video, project_type, state, expected_budget, current_budget } = req.body;
    try {
        const projectUpdated = await projectService.updateProject(project_id, { abstract, description, problematic, proposal, url_image, url_video, project_type, state, expected_budget, current_budget, updatedAt: now() })
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