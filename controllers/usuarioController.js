const Usuario = require('../models/usuarioModel');

exports.getAllUsuarios = (req, res) => {
    Usuario.getAll((err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};

exports.getUsuarioById = (req, res) => {
    const id = req.params.id;
    Usuario.getById(id, (err, results) => {
        if (err) res.status(500).send(err);
        res.json(results[0]);
    });
};

exports.createUsuario = (req, res) => {
    const newUsuario = req.body;
    Usuario.create(newUsuario, (err, results) => {
        if (err) res.status(500).send(err);
        res.json({ id: results.insertId, ...newUsuario });
    });
};

exports.updateUsuario = (req, res) => {
    const id = req.params.id;
    const updatedUsuario = req.body;
    Usuario.update(id, updatedUsuario, (err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};

exports.deleteUsuario = (req, res) => {
    const id = req.params.id;
    Usuario.delete(id, (err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};
