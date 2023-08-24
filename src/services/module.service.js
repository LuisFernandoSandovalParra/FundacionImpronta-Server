'use strict'

const moduleRepository = require('../repositories/module.repository');

const createModule = async(moduleData) =>{
    const existModule = await moduleRepository.getModuleById(moduleData.id);
    if(existModule){
        throw new Error("El modulo ya existe.")
    }
    return await moduleRepository.createModule(moduleData)
}

const getModule = async(moduleId) =>{
    const validModule = await moduleRepository.getModuleById(moduleId);
    if(!validModule){
        throw new Error("El modulo que busca, no existe.")
    }
    return validModule;
}

const getAllModules = async() =>{
    const modulesList = await moduleRepository.getAllModules();
    if(!modulesList){
        throw new Error("La lista de modulos esta vacia.")
    }
    return modulesList;
}

const updateModule = async(moduleId, moduleData) =>{
    const validModule = await moduleRepository.getModuleById(moduleId);
    if(!validModule){
        throw new Error("El modulo que intenta modificar, no existe.")
    }
    return await moduleRepository.updateModule(moduleData);
}

const deleteModule = async(moduleId) =>{
    const validModule = await moduleRepository.getModuleById(moduleId);
    if(!validModule){
        throw new Error("El modulo que intenta eliminar, no existe.")
    }
    await moduleRepository.deleteModule(moduleId);
}

module.exports = {createModule, getModule, getAllModules, updateModule, deleteModule}