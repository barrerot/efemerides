const Efemerides = require('./efemerides');

const miEfemerides = new Efemerides();

// Espera a que las efemérides se carguen antes de hacer consultas
setTimeout(() => {
    console.log("Efeméride de hoy: " + miEfemerides.obtenerEfemerideHoy());
    
    // Prueba con una fecha específica, como el 1 de enero ('0101')
    console.log("Efeméride del 1 de enero: " + miEfemerides.obtenerEfemerideFecha('0101'));
}, 3000); // Espera 3 segundos para asegurarte de que el CSV se haya cargado completamente
