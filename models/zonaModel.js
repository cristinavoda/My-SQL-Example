const db = require('../config/db');

const Zona = {
    getAll: (callback) => {
        db.query('SELECT * FROM zonas', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM zonas WHERE id = ?', [id], callback);
    },
    create: (zona, callback) => {
        db.query('INSERT INTO zonas SET ?', zona, callback);
    },
    update: (id, zona, callback) => {
        db.query('UPDATE zonas SET ? WHERE id = ?', [zona, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM zonas WHERE id = ?', [id], callback);
    }
};

module.exports = Zona;
