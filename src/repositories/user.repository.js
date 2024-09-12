'use strict'

const User = require('../models/user.models')

const createUser = async (userData) => {
    return await User.create(userData);
}

const getAllUsers = async () => {
    return await User.findAll();
}

const getUserByDocumentNum = async (documentNum) => {
    return await User.findOne({ where: { document_number: documentNum } });
}

const getUserByEmail = async(email) => {
    return await User.findOne({ where: { email: email } });
}

const updateUser = async (documentNum, userData) => {
    return await User.update(userData, { where: { document_number: documentNum } });
}

const deleteUser = async (documentNum) => {
    await User.destroy({ where: { document_number: documentNum } })
}

module.exports = { createUser, getAllUsers, getUserByEmail, getUserByDocumentNum, updateUser, deleteUser }