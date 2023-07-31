'use strict'

const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (req, res) => {
    const { name, emailUser, phone, message } = req.body;
    const transporter = nodemailer.createTransport({
        host: process.env.HOST_NODEMAILER,
        port: process.env.PORT_NODEMAILER,
        service: process.env.SERVICE_NODEMAILER,
        auth: {
            user: process.env.AUTH_USER_NODEMAILER,
            pass: process.env.AUTH_PASS_NODEMAILER
        }
    });

    const mailOptions = {
        from: `Usuario Pagina Web - ${emailUser}`,
        to: process.env.AUTH_USER_NODEMAILER,
        subject: `Fundación Impronta - ${name}`,
        text: message + ` Puedes comunicarte conmigo al correo:  ${emailUser} o Nro de telefono: ${phone}`,
    }

    await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.status(500).json({ ok: false, message: "Falló el envio del correo." })
        } else {
            res.status(200).json({ ok: true, message: "Correo enviado exitosamente." })
        }
    })
}

module.exports = { sendEmail };