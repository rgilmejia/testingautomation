const { generarSecuenciaFibonacci } = require('../src/generarSecuenciaFibonacci');

describe('generarSecuenciaFibonacci', () => {
  test('UT001: Debe lanzar error si n es menor que 1', () => {
    try {
      generarSecuenciaFibonacci(0);
    } catch (error) {
      console.log('🧪UT001.1 - Snapshot:\n👉', error.message);
      expect(error.message).toBe('El número debe ser mayor o igual a 1');
    }
    try {
      generarSecuenciaFibonacci(-5);
    } catch (error) {
      console.log('🧪UT001.2 - Snapshot:\n👉', error.message);
      expect(error.message).toBe('El número debe ser mayor o igual a 1');
    }
  });

  test('UT002: Debe lanzar error si n no es entero', () => {
    try {
      generarSecuenciaFibonacci(2.5);
    } catch (error) {
      console.log('🧪UT002 - Snapshot:\n👉', error.message);
      expect(error.message).toBe('El número debe ser un entero');
    }
  });

  test('UT003: Debe lanzar error si n no es un número', () => {
    try {
      generarSecuenciaFibonacci('5');
    } catch (error) {
      console.log('🧪UT003 - Snapshot:\n👉', error.message);
      expect(error.message).toBe('El número debe ser un entero');
    }
  });

  test('UT004: La secuencia para n=1 es "0"', () => {
    const resultado = generarSecuenciaFibonacci(1);
    expect(resultado).toBe('0');
    console.log('🧪UT004 - Snapshot:\n👉', resultado);
  });

  test('UT005: La secuencia para n=2 es "01"', () => {
    const resultado = generarSecuenciaFibonacci(2);
    expect(resultado).toBe('01');
    console.log('🧪UT005 - Snapshot:\n👉', resultado);
  });

  test('UT006: Todos los caracteres del resultado son dígitos', () => {
    const resultado = generarSecuenciaFibonacci(10);
    console.log('🧪UT006 - Snapshot:\n👉', resultado);
    expect(/^[0-9]+$/.test(resultado)).toBe(true);
  });
  test('UT007: Debe devolver una cadena con n números de Fibonacci concatenados', () => {
    const n = 20;
    const resultado = generarSecuenciaFibonacci(n);
    // Extraer los números de Fibonacci del string
    let numeros = [];
    let i = 0;
    while (numeros.length < n) {
      if (numeros.length < 2) {
        numeros.push(numeros.length === 0 ? 0 : 1);
        i += numeros[numeros.length - 1].toString().length;
      } else {
        const siguiente = numeros[numeros.length - 1] + numeros[numeros.length - 2];
        const len = siguiente.toString().length;
        const numStr = resultado.substr(i, len);
        expect(numStr).toBe(siguiente.toString());
        numeros.push(siguiente);
        i += len;
      }
    }
    // Verifica que la cantidad de números sea n
    console.log('🧪UT007 - Snapshot:\n👉', resultado);
    expect(numeros.length).toBe(n);
  });

  test('UT008: Debe comenzar con "0"', () => {
    const resultado = generarSecuenciaFibonacci(10);
    console.log('🧪UT008 - Snapshot:\n👉', resultado);
    expect(resultado.startsWith('0')).toBe(true);
  });

  test('UT009: Cada número (desde el tercero) debe ser la suma de los dos anteriores', () => {
    const n = 20;
    const resultado = generarSecuenciaFibonacci(n);
    let numeros = [];
    let i = 0;
    console.log('🧪UT009 - Snapshot:\n👉', resultado);
    while (numeros.length < n) {
      if (numeros.length < 2) {
        numeros.push(numeros.length === 0 ? 0 : 1);
        i += numeros[numeros.length - 1].toString().length;
      } else {
        const siguiente = numeros[numeros.length - 1] + numeros[numeros.length - 2];
        const len = siguiente.toString().length;
        const numStr = resultado.substr(i, len);
        expect(numStr).toBe(siguiente.toString());
        numeros.push(siguiente);
        i += len;
      }
    }
    for (let j = 2; j < numeros.length; j++) {
      expect(numeros[j]).toBe(numeros[j - 1] + numeros[j - 2]);
    }
  });

});