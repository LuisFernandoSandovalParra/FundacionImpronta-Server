'use strict'

const bcrypt = require('bcrypt');
const credentialService = require('../services/credential.service')

const credentialRegister = async (req, res) => {
    const { user_id, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await credentialService.credentialsRegister({ password: hashedPassword, user_id: user_id });
        res.status(200).json({ ok: true });
    } catch (Error) {
        res.status(500).json({ ok: false });
    }
}

module.exports = { credentialRegister };