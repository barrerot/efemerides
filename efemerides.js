const fs = require('fs');
const moment = require('moment');

class Efemerides {
    constructor() {
        this.efemerides = new Map();
        this.cargarEfemerides();
    }

    cargarEfemerides() {
        const lineas = fs.readFileSync('efemerides.csv', 'utf8').split('\n');
        for (let i = 1; i < lineas.length; i++) {
            const [fecha, efemeride] = lineas[i].split(',').map(elem => elem.trim());
            if (fecha) {
                this.efemerides.set(fecha, efemeride || 'No disponible');
            }
        }
        console.log('Efemérides cargadas.');
        
    }

    //  este métodopara imprimir todas las efemérides
    imprimirEfemerides() {
        console.log("Listado completo de efemérides:");
        for (let [fecha, efemeride] of this.efemerides) {
            console.log(`${fecha}: ${efemeride}`);
        }
    }

    obtenerEfemerideHoy() {
        const hoy = moment().format('DDMM');
        console.log("Fecha actual calculada: " + hoy);
        return this.efemerides.get(hoy) || 'No hay efemérides para hoy.';
    }

    obtenerEfemerideFecha(fecha) {
        if (!moment(fecha, 'DDMM', true).isValid()) {
            return 'Fecha inválida. Por favor, use el formato DDMM.';
        }
        return this.efemerides.get(fecha) || 'No hay efemérides para esa fecha.';
    }
}

module.exports = Efemerides;
