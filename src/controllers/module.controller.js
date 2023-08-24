'use strict'

const moduleService = require('../services/module.service');

const createModule = async (req, res) => {
    const { name, url_infographic, url_pdf } = req.body;
    try {
        const module = await moduleService.createModule({ name, url_infographic, url_pdf });
        res.status(200).json({ ok: true, info: module })
    } catch (error) {
        res.status(500).json({ ok: false, info: error })
    }
}

const getModule = async (req, res) => {
    const { module_id } = req.params;
    try {
        const module = await moduleService.getModule(module_id);
        res.status(200).json({ ok: true, info: module })
    } catch (error) {
        res.status(500).json({ ok: false, info: error })
    }
}

const getModulesList = async (req, res) => {
    try {
        const modulesList = await moduleService.getAllModules();
        res.status(200).json({ ok: true, info: modulesList })
    } catch (error) {
        res.status(500).json({ ok: false, info: error })
    }
}

const updateModule = async (req, res) => {
    const { module_id } = req.params;
    const { name, url_infographic, url_pdf } = req.body;
    try {
        const updatedModule = await moduleService.updateModule(module_id, { name, url_infographic, url_pdf, updatedAt: Date.now() });
        res.status(200).json({ ok: true, info: updatedModule })
    } catch (error) {
        res.status(500).json({ ok: false, info: error })
    }
}

const deleteModule = async (req, res) => {
    const { module_id } = req.params;
    try {
        await moduleService.deleteModule(module_id);
        res.status(200).json({ ok: true, info: "Modulo eliminado correctamente" })
    } catch (error) {
        res.status(500).json({ ok: false, info: error })
    }
}

module.exports = { createModule, getModule, getModulesList, updateModule, deleteModule };