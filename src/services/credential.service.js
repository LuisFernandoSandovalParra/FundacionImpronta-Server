'use strict'

const credentialRepository = require('../repositories/credential.repository');

const credentialsRegister = async (credentials) => {
    await credentialRepository.getCredentials(credentials.user_id).then(async (result, reject) => {
        if (result === null) {
            return await credentialRepository.credentialsRegister(credentials);
        }
        if (reject) {
            throw new Error('El usuario ya tiene una cuenta registrada')
        }
    });
}

const getCredentials = async (user_id) => {
    const validateCredentials = credentialRepository.getCredentials(user_id);
    if (!validateCredentials) {
        throw new Error('Las credenciales no existen.')
    }
    return validateCredentials;
}

module.exports = { credentialsRegister, getCredentials };