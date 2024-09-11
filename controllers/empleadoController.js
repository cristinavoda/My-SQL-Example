const Empleado = require('../models/empleadoModel');

exports.getAllEmpleados = (req, res) => {
    Empleado.getAll((err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};

exports.getEmpleadoById = (req, res) => {
    const id = req.params.id;
    Empleado.getById(id, (err, results) => {
        if (err) res.status(500).send(err);
        res.json(results[0]);
    });
};

exports.createEmpleado = (req, res) => {
    const newEmpleado = req.body;
    Empleado.create(newEmpleado, (err, results) => {
        if (err) res.status(500).send(err);
        res.json({ id: results.insertId, ...newEmpleado });
    });
};

exports.updateEmpleado = (req, res) => {
    const id = req.params.id;
    const updatedEmpleado = req.body;
    Empleado.update(id, updatedEmpleado, (err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};

exports.deleteEmpleado = (req, res) => {
    const id = req.params.id;
    Empleado.delete(id, (err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};
