'use strict'

const Credential = require('../models/credential.models');
const User = require('../models/user.models');
const sequelize = require('../../config/config');

const credentialsRegister = async (credentials) => {
    sequelize.transaction(async(t) => {
        try {
            const createdCredential = await Credential.create({password: credentials.password, user_id: credentials.user_id}, {transaction: t});
            const user = await User.findByPk(credentials.user_id);
            if(!user){
                throw new Error("Usuario no encontrado.")
            }
            await createdCredential.set(user, {transaction: t});
        } catch (error) {
            console.log("Este es el error: ", error)
            throw new Error("Error al registrar credenciales.")
        }
    })
}

const getCredentials = async (user_id) => {
    return await Credential.findOne({ where: { user_id: user_id } })
}

module.exports = { credentialsRegister, getCredentials }