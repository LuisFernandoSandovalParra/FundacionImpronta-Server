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

const transporterVolunteerEmail = nodemailer.createTransport({
    host: process.env.HOST_NODEMAILER,
    port: process.env.PORT_NODEMAILER,
    service: process.env.SERVICE_NODEMAILER,
    auth: {
        user: process.env.AUTH_USER_NODEMAILER,
        pass: process.env.AUTH_PASS_NODEMAILER
    }
});

const sendVolunteerEmail = async (req, res) => {
    const { first_name, last_name, email, phone, academic_level, habilities, work_hours, modality, interest_population } = req.body;

    const message = `DATOS POSIBLE VOLUNTARIO: \n
    1. Nombre: ${first_name} \n 
    2. Apellidos: ${last_name} \n 
    3. E-mail: ${email} \n 
    4. Telefono: ${phone} \n 
    5. Nivel Academico: ${academic_level} \n 
    6. Profesión / Habilidades tecnicas: ${habilities} \n 
    6. Horas de disposición: ${work_hours} \n 
    7. Modalidad: ${modality} \n 
    8. Población de interes: ${interest_population}`;

    const mailOptions = {
        from: `Usuario interesado en voluntariados.`,
        to: 'luis.sandoval03@uptc.edu.co',
        subject: `POSTULACIÓN VOLUNTARIO - ${first_name}`,
        text: message,
    }

    await transporterVolunteerEmail.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.status(500).json({ ok: false, message: "Falló el envio del correo." })
        } else {
            res.status(200).json({ ok: true, message: "Correo enviado exitosamente." })
        }
    })
}

module.exports = { sendEmail, sendVolunteerEmail };