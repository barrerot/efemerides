const Efemerides = require('./efemerides');

const miEfemerides = new Efemerides();

// Espera a que las efemérides se carguen antes de hacer consultas
setTimeout(() => {
    // Obtener y mostrar la efeméride de hoy
    console.log("Efeméride de hoy: " + miEfemerides.obtenerEfemerideHoy());

    // Obtener y mostrar la efeméride de una fecha específica, por ejemplo, '0101' (1 de enero)
    console.log("Efeméride del 17 de diciembre: " + miEfemerides.obtenerEfemerideFecha('1712'));
}, 1000); // Espera 1 segundo para asegurarte de que las efemérides se hayan cargado
