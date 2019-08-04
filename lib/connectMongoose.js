'use strict';

const mongoose = require('mongoose');
const conn = mongoose.connection;

mongoose.set('useFindAndModify', false);

// error handler to connect to database
conn.on('error', err => {
  console.log('Error de conexión', err);
  process.exit(1);
});

conn.once('open', () => {
  console.log('Conectado a MongoDB en', mongoose.connection.name);
});

// connect to database
mongoose.connect('mongodb://localhost/nodepopDB', { useNewUrlParser: true });


module.exports = conn;