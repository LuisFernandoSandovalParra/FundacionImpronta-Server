'use strict'

const { DataTypes } = require('sequelize')
const sequelize = require('../../config/config');

const Credential = sequelize.define("credential", {
    password: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
})
/*
// Función para generar el hash de la contraseña antes de crear o actualizar un usuario
Credential.beforeCreate(async (credential) => {
    const hash = await bcrypt.hash(credential.password, 20);
    credential.password = hash;
});

// Método para verificar la contraseña
Credential.prototype.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
*/

module.exports = Credential;