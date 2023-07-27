'use strict'

const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    const { name, emailuser, phone, message } = req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        service: 'Gmail',
        auth: {
            user: 'impronta.desarrollointegral@gmail.com',
            pass: 'rjmjkyayfkkisyce'
        }
    });

    const mailOptions = {
        from: `Usuario Pagina Web - ${emailuser}`,
        to: 'luis.sandoval03@uptc.edu.co',
        subject: `Fundación Impronta - ${name}`,
        text: message + ` Puedes comunicarte conmigo al telefono: ${phone}`,
    }

    await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.status(500).json({ok: false, message: "Falló el envio del correo."})
        } else {
            res.status(200).json({ok: true, message: "Correo enviado exitosamente."})
        }
    })
}

module.exports = { sendEmail };