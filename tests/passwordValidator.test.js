const { validarPassword } = require("../src/passwordValidator");

  test('debe lanzar error si la contraseña no es un string (número)', () => {
    expect(() => validarPassword(12345678)).toThrow('La contraseña debe ser un string');
  });

  test('debe lanzar error si tiene menos de 8 caracteres', () => {
    expect(() => validarPassword('Ab1!')).toThrow('La contraseña debe tener al menos 8 caracteres');
  });

  test('debe lanzar error si no tiene letra mayúscula', () => {
    expect(() => validarPassword('abc123!@')).toThrow('La contraseña debe tener al menos una letra mayúscula');
  });

  test('debe lanzar error si no tiene letra minúscula', () => {
    expect(() => validarPassword('ABC123!@')).toThrow('La contraseña debe tener al menos una letra minúscula');
  });

  test('debe lanzar error si no tiene número', () => {
    expect(() => validarPassword('Abcdef!@')).toThrow('La contraseña debe tener al menos un número');
  });

  test('debe lanzar error si no tiene carácter especial', () => {
    expect(() => validarPassword('Abc12345')).toThrow('La contraseña debe tener al menos un carácter especial');
  });

  test('debe retornar true si la contraseña es válida', () => {
    expect(validarPassword('Abc123!@45+25ENTRE28//%%')).toBe(true);
  });