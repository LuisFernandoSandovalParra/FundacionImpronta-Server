'use strict'

const crypto = require('crypto');
require('dotenv').config();

const WOMPI_KEY = process.env.WOMPI_PUBLIC_KEY
const integrity = "test_integrity_dAB8V0Igt8Kpu3DPZNpNfBp5a7TpWzq9"

const generatePaymentReference = () => {
    const length = 20;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let reference = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        reference += characters.charAt(randomIndex);
    }
    return reference;
}

const generateIntegritySignature = async(req, res) => {
    let reference = generatePaymentReference()
    let concatString = reference + req.params.amount + "COP" + integrity;
    const encondedText = new TextEncoder().encode(concatString);
    const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    res.json({ result: hashHex, reference: reference });
}

module.exports = { generateIntegritySignature };
