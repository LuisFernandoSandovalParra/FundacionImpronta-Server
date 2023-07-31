'use strict'

const userRepository = require('../repositories/user.repository');

const createNewUser = async (userData) => {
    const existingUser = await userRepository.getUserByDocumentNum(userData.document_number);
    if (existingUser) {
        throw new Error("El usuario ya existe.");
    }
    return await userRepository.createUser(userData);
}

const getUser = async (documentNum) => {
    const user = await userRepository.getUserByDocumentNum(documentNum);
    if (!user) {
        throw new Error("el usuario no existe.")
    }
    return user;
}

const getUserList = async () => {
    const userList = await userRepository.getAllUsers();
    if (!userList) {
        throw new Error("La lista de usuario esta vacia.")
    }
    return userList;
}

const updateUserData = async (documentNum, userData) => {
    const existingUser = await userRepository.getUserByDocumentNum(documentNum);
    if (!existingUser) {
        throw new Error("El usuario no existe.")
    }
    return await userRepository.updateUser(documentNum, userData);
}

const deleteUserData = async (documentNum) => {
    const existingUser = await userRepository.getUserByDocumentNum(documentNum);
    if (!existingUser) {
        throw new Error("El usuario que intenta eliminar no existe.")
    }
    await userRepository.deleteUser(documentNum);
}

module.exports = { createNewUser, getUser, getUserList, updateUserData, deleteUserData };