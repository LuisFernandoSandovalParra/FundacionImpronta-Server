'use strict'

const Module = require('../models/module.models');

const createModule = async (moduleData) => {
    return await Module.create(moduleData);
}

const getAllModules = async () => {
    return await Module.findAll();
}

const getModuleById = async (moduleId) => {
    return await Module.findByPk(moduleId);
}

const updateModule = async (moduleId, moduleData) => {
    return await Module.update(moduleData, { where: { module_id: moduleId } });
}

const deleteModule = async (moduleId) => {
    await Module.destroy({ where: { module_id: moduleId } });
}

module.exports = {createModule, getAllModules, getModuleById, updateModule, deleteModule}