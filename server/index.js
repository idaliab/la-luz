const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/tipohab', require('./routes/tipohab.routes'));
app.use('/api/infogen', require('./routes/infogen.routes'));
app.use('/api/habitaciones', require('./routes/habitacion.routes'));
app.use('/api/atracciones', require('./routes/atraccion.routes'));
app.use('/api/forpago', require('./routes/forpago.routes'));
app.use('/api/usuario', require('./routes/usuario.routes'));

app.use('/api/ocupacion', require('./routes/ocupacion.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});