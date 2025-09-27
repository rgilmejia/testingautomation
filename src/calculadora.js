
function calcular(a, b, operacion) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los parámetros deben ser números');
  }

  switch (operacion) {
    case 'sumar':
      return a + b;
    case 'restar':
      return a - b;
    default:
      throw new Error('Operación no válida.');
  }
}

module.exports = { calcular }