const poblacionInicial = 750;
const tasaCrecimiento = 0.12;
const anioActual = 2025;
const anioFinal = 2035;

const cantidadAnios = anioFinal - anioActual;

poblacionFinal = poblacionInicial * (1 + tasaCrecimiento) ** cantidadAnios;

console.log("Población estimada en 2035:", Math.round(poblacionFinal));



