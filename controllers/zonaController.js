const Zona = require('../models/zonaModel');

exports.getAllZonas = (req, res) => {
    Zona.getAll((err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};

exports.getZonaById = (req, res) => {
    const id = req.params.id;
    Zona.getById(id, (err, results) => {
        if (err) res.status(500).send(err);
        res.json(results[0]);
    });
};

exports.createZona = (req, res) => {
    const newZona = req.body;
    Zona.create(newZona, (err, results) => {
        if (err) res.status(500).send(err);
        res.json({ id: results.insertId, ...newZona });
    });
};

exports.updateZona = (req, res) => {
    const id = req.params.id;
    const updatedZona = req.body;
    Zona.update(id, updatedZona, (err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};

exports.deleteZona = (req, res) => {
    const id = req.params.id;
    Zona.delete(id, (err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};
