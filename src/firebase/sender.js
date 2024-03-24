const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
require('dotenv').config();

admin.initializeApp();

exports.sendEmailNotification = functions.firestore
  .document('formularioPortafolio')
  .onCreate(async (snapshot, context) => {
    const newData = snapshot.data();
    const correoDestino = 'jpp.valdes@gmail.com';
    
    // Configura el transporte SMTP
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'rybot69@gmail.com',
        pass: functions.config().gmail.password
      }
    });
    
    // Configura el correo electrónico
    const mailOptions = {
      from: 'rybot69@gmail.com',
      to: correoDestino,
      subject: 'Nuevo mensaje en Formulario Portafolio',
      text: `Se ha ingresado un nuevo mensaje: ${JSON.stringify(newData)}`
    };
    
    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);
    
    console.log('Correo electrónico enviado correctamente');
  });