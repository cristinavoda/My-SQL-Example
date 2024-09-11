const db = require('../config/db');

const Empleado = {
    getAll: (callback) => {
        db.query('SELECT * FROM empleados', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM empleados WHERE id = ?', [id], callback);
    },
    create: (empleado, callback) => {
        db.query('INSERT INTO empleados SET ?', empleado, callback);
    },
    update: (id, empleado, callback) => {
        db.query('UPDATE empleados SET ? WHERE id = ?', [empleado, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM empleados WHERE id = ?', [id], callback);
    }
};

module.exports = Empleado;
