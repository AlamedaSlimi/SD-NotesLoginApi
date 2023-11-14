const notesCtrl = {};
const Note = require('../models/Note');

//--------------------

const nodemailer = require('nodemailer');

// Configura el transporte
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'victor.gon.0777@gmail.com',
    pass: 'qxgmhjdiogopkwfd',
  },
});

// Función para enviar correo electrónico
const enviarCorreo = async () => {
  try {
    // Configura el mensaje
    const mensaje = {
      from: 'victor.gon.0777@gmail.com',
      to: 'mrblue77lol@gmail.com',
      subject: 'Testeando la wea',
      text: 'Mensaje enviado con la api de gmail',
    };

    // Envía el correo electrónico
    const info = await transporter.sendMail(mensaje);
    console.log('Correo enviado: %s', info.messageId);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

//-------------------------

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};
notesCtrl.createNote = async (req, res) => {
    console.log('entre', req.body);
    const {title, content, date, author} = req.body;
    const newNote = new Note({title,content,date,author});
    console.log("nueva nota: ",newNote);
    await newNote.save();
    res.json({message: 'Note Saved'});
    
    // Llama a la función para enviar correo
    enviarCorreo();
};


notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    console.log(note);
    res.json(note);
};

notesCtrl.updateNote = async (req, res) => {
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        author,
        content
    });
    console.log(req.params.id, req.body);
    res.json({message: 'Note Updated'});
};

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Note Deleted'})
};

module.exports = notesCtrl;

