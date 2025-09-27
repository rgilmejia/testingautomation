const { calcular } = require("../src/calculadora");

  test('debería sumar correctamente dos números', () => {
    expect(calcular(5, 3, 'sumar')).toBe(8);
  });

    test('debería sumar correctamente dos números (iteración 2)', () => {
    expect(calcular(e, 3, 'sumar')).toBe(8);
  });
  
  test('debería restar correctamente dos números', () => {
    expect(calcular(5, 3, 'restar')).toBe(2);
  });

  test('no debería operar si el primer parámetro es un string', () => {
    expect(() => calcular("5", 3, 'sumar')).toThrow('Los parámetros deben ser números');
  });

  test('no debería operar si el segundo parámetro es un string', () => {
    expect(() => calcular(5, "3", 'restar')).toThrow('Los parámetros deben ser números');
  });

    test('no debería operar si los dos parámetros son string', () => {
    expect(() => calcular("5", "3", 'restar')).toThrow('Los parámetros deben ser números');
  });

  test('no debería operar si la operación es inválida', () => {
    expect(() => calcular(5, 3, 'multiplicar')).toThrow('Operación no válida');
  });