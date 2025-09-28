function generarSecuenciaFibonacci(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new Error('El número debe ser un entero');
  }
  if (n < 1) {
    throw new Error('El número debe ser mayor o igual a 1');
  }
  let lista = [];
  let numero1 = 0, numero2 = 1;
  for (let i = 0; i < n; i++) {
    lista.push(numero1);
    let siguiente = numero1 + numero2;
    numero1 = numero2;
    numero2 = siguiente;
  }
  return lista.join('');
}

module.exports = { generarSecuenciaFibonacci };

