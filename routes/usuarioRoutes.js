const express = require('express');
const router = express.Router();
const connection = require('../config/db'); 

// Obtener todos los usuarios
router.get('/', (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving users from the database');
        } else {
            res.json(results);
        }
    });
});

// Obtener un usuario por ID
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    connection.query('SELECT * FROM usuarios WHERE id = ?', [userId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving user from the database');
        } else {
            res.json(results[0]);
        }
    });
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).send('All fields are required.');
    }
  
    const query = 'INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)';
    connection.query(query, [name, email, password], (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).send('Error inserting user into the database.');
      }
      res.status(201).send('User added successfully.');
    });
  });
  
  

// Actualizar un usuario existente
router.put('/:id', (req, res) => {
    const userId = req.params.id;
    const { nombre, correo, contrasena } = req.body;
    connection.query('UPDATE usuarios SET nombre = ?, correo = ?, contrasena = ? WHERE id = ?', [nombre, correo, contrasena, userId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error updating user in the database');
        } else {
            res.send(`User with ID: ${userId} updated successfully`);
        }
    });
});

// Eliminar un usuario
router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    connection.query('DELETE FROM usuarios WHERE id = ?', [userId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting user from the database');
        } else {
            res.send(`User with ID: ${userId} deleted successfully`);
        }
    });
});

module.exports = router;
