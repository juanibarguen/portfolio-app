// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { Resend } = require('resend');

// Inicializa Resend con tu API Key
const resend = new Resend('re_L2rFjzZh_C8wGgF2fZL5TZjP19e5M3PfU');

// Configura Express para servir archivos estáticos desde la carpeta 'public'

const app = express();
app.use(express.static('public'));
const port = 3000;

// Middleware para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Ruta para enviar correo electrónico
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
  
    console.log('Enviando correo a través de Resend...');
  
    try {
      const response = await resend.emails.send({
        from: 'contacto@resend.dev',
        to: 'juanibarguen159@gmail.com',
        subject: `Nuevo mensaje CONTACTO - PORTFOLIO`,
        text: `Has recibido un nuevo mensaje de: ${name}, (${email}):\n\n${message}`,
      });
  
      console.log('Correo enviado exitosamente:', response);
      res.send(`Email enviado a ${email}`);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).send('Error al enviar el correo.');
    }
  });
  

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});



