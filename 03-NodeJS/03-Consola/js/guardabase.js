const fs = require('fs');

const filepath = './db/data.json';

const guardaBase = (data) => {
    fs.writeFileSync(filepath, JSON.stringify(data));
};

const cargaBase = () => {
    if (!fs.existsSync(filepath)) {
        return null;
    }
    const tareas = fs.readFileSync(filepath, {encoding: 'utf-8'});
    return JSON.parse(tareas);
};

module.exports = {
    guardaBase,
    cargaBase
}