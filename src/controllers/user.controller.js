'use strict'

const userService = require('../services/user.service')

const createUser = async (req, res) => {
    const { name, last_name, birthdate, document_type, document_number, phone_number, email, academy_level, profession } = req.body;
    try {
        const user = await userService.createNewUser({ name, last_name, birthdate, document_type, document_number, phone_number, email, academy_level, profession });
        res.status(200).json({ ok: true, info: user });
    } catch (error) {
        res.status(500).json({ ok: false, info: error });
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
    const { name, last_name, phone_number, email, academy_level, profession } = req.body;
    try {
        const user = await userService.updateUserData(document_number, { name: name, last_name: last_name, phone_number: phone_number, email: email, academy_level: academy_level, profession: profession, updatedAt: now() });
        res.status(200).json({ ok: true, info: user });
    } catch (error) {
        res.status(500).json({ ok: false, info: error });
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

module.exports = { createUser, getUser, getUserList, updateUser, deleteUser };