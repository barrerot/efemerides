# Librería de Efemérides

## Descripción
La librería de Efemérides proporciona una forma sencilla de obtener efemérides para el día actual y para fechas específicas. Ideal para proyectos que necesitan mostrar eventos o datos históricos relevantes para una fecha determinada.

## Instalación
Para instalar la librería, utiliza el siguiente comando npm:

```bash
npm install efemerides
```

## Métodos
La librería incluye dos métodos principales:

- `obtenerEfemerideHoy()`: Devuelve la efeméride para el día actual.
- `obtenerEfemerideFecha(fecha)`: Acepta una fecha en formato `DDMM` y devuelve la efeméride correspondiente a esa fecha.

## Ejemplo de Uso

```javascript
const Efemerides = require('efemerides');

const miEfemerides = new Efemerides();

console.log("Efeméride de hoy: " + miEfemerides.obtenerEfemerideHoy());
console.log("Efeméride del 1 de enero: " + miEfemerides.obtenerEfemerideFecha('0101'));
```

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor envía un pull request o abre un issue.

## Licencia
[WTFPL](http://www.wtfpl.net/txt/copying/) or [CC0](https://creativecommons.org/publicdomain/zero/1.0/), Se agradece una donación y/o atribución, pero no es obligatorio.