require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());


const usuarioRoutes = require('./routes/usuarioRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const zonaRoutes = require('./routes/zonaRoutes');


app.use('/api/usuarios', usuarioRoutes);
app.use('/api/empleados', empleadoRoutes);
app.use('/api/zonas', zonaRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Hola SQL</h1>');
});

const startServer = (port) => {
    app.listen(port, () => {
        console.log(`Escuchando en localhost:${port}`);
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`El puerto ${port} está en uso, intentando con el puerto ${port + 1}`);
            startServer(port + 1); // Intenta iniciar en el siguiente puerto
        } else {
            console.error(err);
        }
    });
};

startServer(port);
