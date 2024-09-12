'use strict'

const userService = require('../services/user.service')
const credentialService = require('../services/credential.service')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    let { name, last_name, birthdate,
        document_type, document_number, phone_number,
        email, academy_level, profession } = req.body;
    birthdate = Date.parse(birthdate);
    document_number = BigInt(document_number);
    try {
        await userService.createNewUser({
            name, last_name,
            birthdate, document_type, document_number,
            phone_number, email, academy_level, profession, rol: 0
        });
        const user = await userService.getUser(document_number);
        res.status(200).json({ ok: true, info: { user_id: user.user_id } });
    } catch (Error) {
        res.status(500).json({ ok: false, info: Error.toString() });
    }
}

const getUser = async (req, res) => {
    const { document_number } = req.params;
    try {
        const user = await userService.getUser(document_number);
        res.status(200).json({ ok: true, info: user });
    } catch (error) {
        res.status(500).json({ ok: false, info: error });
    }
}

const getUserList = async (req, res) => {
    try {
        const userList = await userService.getUserList();
        res.status(200).json({ ok: true, info: userList });
    } catch (error) {
        res.status(500).json({ ok: false, info: error });
    }
}

const updateUser = async (req, res) => {
    const { document_number } = req.params;
    const { name, last_name, birthdate, phone_number, academy_level, profession } = req.body;
    let confirm = 0;
    try {
        await userService.updateUserData(document_number, { name: name, last_name: last_name, birthdate: birthdate, phone_number: phone_number, academy_level: academy_level, profession: profession, updatedAt: new Date() }).then((data, err) => {
            confirm = data;
        }
        );
        res.status(200).json({ ok: true, info: confirm });
    } catch (Error) {
        res.status(500).json({ ok: false, info: Error });
    }
}

const deleteUser = async (req, res) => {
    const { document_number } = req.params;
    try {
        await userService.deleteUserData(document_number);
        res.status(200).json({ ok: true });
    } catch (error) {
        res.status(500).json({ ok: false, info: error });
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.getUserByEmail(email);
        const credentials = await credentialService.getCredentials(user.dataValues.user_id);
        const passwordMatch = await bcrypt.compare(password, credentials.dataValues.password);
        if (!passwordMatch) {
            return res.status(401).json({ info: 'Credenciales inválidas' });
        }
        jwt.sign({ user }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
            if (!err) {
                res.status(200).json({ token: token });
            }
        });
    } catch (error) {
        res.status(401).json({ info: 'La cuenta no existe' });
    }

}

module.exports = { createUser, getUser, getUserList, updateUser, deleteUser, userLogin };